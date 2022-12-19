import { useEffect, useState, useRef } from 'react'
import { Calendar } from '../Calendar'
import { Task } from '../Task'
import { TTask } from '../Types/types'
import { VscCalendar } from 'react-icons/vsc'
import { MinCalendar } from '../MinCalendar'
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi'
import './style.css'


const daysOfWeek = [
  ['Domingo','Sunday'],
  ['Segunda','Monday'],
  ['Terça','Tuesday'],
  ['Quarta','Wednesday'],
  ['Quinta','Thursday'],
  ['Sexta','Friday'],
  ['Sábado','Sarturday'],
]


const db = [
  {
    date: '16/12/2022',
    tasks: [
      {
        id: 0,
        date: '16/12/2022',
        status: 'Pending',
        dateCreated: '13/12/2022',
        dateCompleted: '',
        deadline: '28/11/2022',
        description: 'Tarefas 1.1'
      },
      {
        id: 1,
        date: '16/12/2022',
        status: 'Pending',
        dateCreated: '01/11/2022',
        dateCompleted: '',
        deadline: '28/11/2022',
        description: 'Tarefas 1.2'
      }
    ]
  },
  {
    date: '17/12/2022',
    tasks: [
      {
        id: 0,
        date: '17/12/2022',
        status: 'Pending',
        dateCreated: '29/11/2022',
        dateCompleted: '',
        deadline: '29/11/2022',
        description: 'Tarefa de quita'
      },
      {
        id: 1,
        date: '17/12/2022',
        status: 'Pending',
        dateCreated: '29/11/2022',
        dateCompleted: '',
        deadline: '29/11/2022',
        description: 'Quinta a tarde'
      }
    ]
}]

export function Schedule() {

  const [addTaskOpen, setAddTaskOpen] = useState<boolean>(false)
  const [selectorDeadlineOpen, setSelectorDeadlineOpen] = useState<boolean>(false)
  const [deadlineNewTask, setDeadlineNewTask] = useState<Date>(new Date)
  const [descriptionNewTask, setDescriptionNewTask] = useState<string>('')
  const [date, setDate] = useState<Date>(new Date())
  const [tasks, setTasks] = useState<TTask[]>([]);
  const [stateSchedule, setStateSchedule] = useState<Boolean>(false)
  const inputDescriptionNewTask = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const currentDay = db.find(e => e.date == date.toLocaleDateString());
    const currentTasks = currentDay?.tasks ?? []
    setTasks(currentTasks);   
    setSelectorDeadlineOpen(false)
    setAddTaskOpen(false)
  }, [date, stateSchedule])
  
  const changeStatus = (idTask: number, newStatus: string, dateCompleted: string) => {
    db.find(e => e.date == date.toLocaleDateString())
      ?.tasks.map(e => e.id == idTask ? (
        e.status = newStatus,
        e.dateCompleted = dateCompleted
      ) : {})  
    setStateSchedule(!stateSchedule)
  }

  const removeTask = (idTask: number) => {
    const newArrayTasks = db.find(e => e.date == date.toLocaleDateString())
    ?.tasks.filter(e => e.id != idTask) as TTask[]
    db.map(e => e.date == date.toLocaleDateString() && (
      e.tasks = newArrayTasks
    ))    
    setStateSchedule(!stateSchedule)
  }

  const saveNewTask = (description: string, deadline: string) => {
    const newTask = {
      id: Math.random() * 1000,
      date: date.toLocaleDateString(),
      status: 'Pending',
      dateCreated: new Date().toLocaleDateString(),
      dateCompleted: '',
      deadline,
      description
    }

    db.map(e => e.date == date.toLocaleDateString() && (
      e.tasks.push(newTask)
    ))
    inputDescriptionNewTask.current?.value && (
      inputDescriptionNewTask.current.value = ''
    )
    setDescriptionNewTask('')
    setDeadlineNewTask(date)
    setStateSchedule(!stateSchedule)    
  }
  
  const btNewTask = (
    <button
      className='btNewTask'
      onClick={() => setAddTaskOpen(!addTaskOpen)}>
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
          ref={inputDescriptionNewTask}
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

  const nextDay = () => {
    setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1))
  }

  const dayPrevious = () => {
    setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1))
  }


  return (
    <div className='schedule'>
      <Calendar
        date={date}
        setDate={setDate}
      />
      <div className='titleCalendar'>
        <BiLeftArrow
          onClick={dayPrevious}
        />
        <div className='titleCalendarContent'>
          <h1>{daysOfWeek[date.getDay()][0]}</h1>
          <span className='currentDate'>
            {date.toLocaleDateString()}
          </span>
        </div>
        <BiRightArrow
          onClick={nextDay}
        />
      </div>
      {
        tasks?.map(
          task =>
            <Task
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

      /*   
      
        const dayPreviousWeek = () => {
          setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7))
        }
      
        const nextDayWeek = () => {
          setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7))
        }
      
        function keysFunctions(key){
          return {
            ArrowRight: nextDay(),
            ArrowLeft: dayPrevious(),
            ArrowDown: nextDayWeek(),
            ArrowUp: dayPreviousWeek()
          }
        }
      
        document.addEventListener('keydown', (key) => {
          const keyFunctions = keysFunctions(key.key)
        }) */