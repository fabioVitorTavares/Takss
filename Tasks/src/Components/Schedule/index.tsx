import { useEffect, useState } from 'react'
import { Calendar } from '../Calendar'
import { Task } from '../Task'
import { TTarefas, TTask } from '../Types/types'
import { VscCalendar } from 'react-icons/vsc'
import { MinCalendar } from '../MinCalendar'
import { TDay } from '../Types/types';
import './style.css'


const db = [{
  id: 0,
  days: [{
    date: '13/12/2022',
    tasks: [
      {
        id: 0,
        status: 'Pending',
        dateCreated: '13/12/2022',
        dateCompleted: '',
        deadline: '28/11/2022',
        description: 'Tarefas 1.1'
      },
      {
        id: 1,
        status: 'Pending',
        dateCreated: '01/11/2022',
        dateCompleted: '',
        deadline: '28/11/2022',
        description: 'Tarefas 1.2'
      }
    ]
  },
  {
    date: '05/12/2022',
    tasks: [
      {
        id: 0,
        status: 'Pending',
        dateCreated: '29/11/2022',
        dateCompleted: '',
        deadline: '29/11/2022',
        description: 'Tarefa de quita'
      },
      {
        id: 1,
        status: 'Pending',
        dateCreated: '29/11/2022',
        dateCompleted: '',
        deadline: '29/11/2022',
        description: 'Quinta a tarde'
      }
    ]
  }]
}]



export function Schedule() {
  
  const [userID, setUserId] = useState<number>(0);
  const [date, setDate] = useState<Date>(new Date())
  const [tasks, setTasks] = useState<TTask[]>([]);
  
  console.log(db.find(e => e.id == 0)?.days
  .find(e => e.date == date.toLocaleDateString())
    ?.tasks)
  
  useEffect(() => {
    const currentUser = db.find(e => e.id == userID);
    const currentDay = currentUser?.days.find(e => e.date == date.toLocaleDateString());
    const currentTasks = currentDay?.tasks
    setTasks(currentTasks as TTask[]);
  }, [date, userID, db])


  const [addTaskOpen, setAddTask] = useState<boolean>(false)
  const [selectorDeadlineOpen, setSelectorDeadlineOpen] = useState<boolean>(false)
  const [deadlineNewTask, setDeadlineNewTask] = useState<Date>(new Date)
  const [descriptionNewTask, setDescriptionNewTask] = useState<string>('');


  const nextDay = () => {
    setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1))
  }

  const dayPrevious = () => {
    setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1))
  }

  const dayPreviousWeek = () => {
    setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7))
  }

  const nextDayWeek = () => {
    setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7))
  }

  document.addEventListener('keydown', (key) => {
    key.key == 'ArrowRight' && nextDay();
    key.key == 'ArrowLeft' && dayPrevious();
    key.key == 'ArrowDown' && nextDayWeek();
    key.key == 'ArrowUp' && dayPreviousWeek();
  })

  const changeStatus = (idTask: number, newStatus: string, dateCompleted: string) => {
    const newTasks = tasks?.map((e) => {
      if (e?.id == idTask) {
        e.status = newStatus
        e.dateCompleted = dateCompleted
      }
      return e as TTask
    })
    setTasks(newTasks)
  }

  const removeTask = (idTask: number) => {
    const newTasks = tasks?.filter(e => e.id != idTask)
    setTasks(newTasks)
  }

  const saveNewTask = (description: string, deadline: string) => {
    const newTask = {
      id: Math.random()*1000,
      status: 'Pending',
      dateCreated: date.toLocaleDateString(),
      dateCompleted: '',
      deadline,
      description
    }

    db.find(e => e.id == 0)?.days
      .find(e => e.date == date.toLocaleDateString())
      ?.tasks.push(newTask)
  }

  const btNewTask = (
    <button
      className='btNewTask'
      onClick={() => setAddTask(!addTaskOpen)}>
      New Task
    </button>
  )

  const selectorDeadline = (
    <div className='selectorDeadline'>
      <MinCalendar
        date={deadlineNewTask}
        setDate={setDeadlineNewTask}
      />
    </div>
  );

  const btSave = (
    <button
      className='btSave'
      onClick={
        () => {
          saveNewTask(descriptionNewTask, deadlineNewTask.toLocaleDateString())
        }
      }
    >
      Save
    </button>
  );

  const addTask = (
    <div className='addTask' >
      <div className='inputs'>
        <input
          className='inputDescriptionNewTask'
          type='text'
          onChange={(e) => setDescriptionNewTask(e.target.value)}
        />
        <div
          className='inputDeadlineNewTask'
          title='Deadline'
        >
          <p>Deadline {deadlineNewTask.toLocaleDateString()}</p>
          <VscCalendar
            className='btSelectorDeadline'
            onClick={() => setSelectorDeadlineOpen(!selectorDeadlineOpen)}
          />
          {selectorDeadlineOpen && selectorDeadline}
        </div>
      </div>
      {btSave}
    </div>
  )



  return (
    <div className='schedule'>

      <Calendar
        date={date}
        setDate={setDate}
      />
      {
        tasks?.map(
          task => <Task
            key={task.id}
            task={task}
            changeStatus={
              (newStatus: string, dateCompleted: string) => {
                changeStatus(task.id, newStatus, dateCompleted)
              }
            }
            removeTask={() => removeTask(task.id)}
          />
        )
      }
      {btNewTask}
      {addTaskOpen && addTask}
    </div>
  )
}
