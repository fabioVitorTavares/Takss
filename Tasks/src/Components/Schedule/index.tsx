import { useEffect, useRef, useState } from 'react'
import { Calendar } from '../Calendar'
import { Task } from '../Task'
import { TTarefas } from '../Types/types'
import { VscDiffAdded, VscSave, VscDiffRemoved, VscCalendar, VscAdd, VscChromeMinimize } from 'react-icons/vsc'
import { MinCalendar } from '../MinCalendar'
import './style.css'


const dias = [
  {
    id: '1',
    date: '28/11/2022',
    tasks: [
      {
        id: '1',
        status: 'Pending',
        dateCreated: '01/11/2022',
        dateCompleted: '',
        deadline: '28/11/2022',
        description: 'Tarefas 1.1'
      },
      {
        id: '2',
        status: 'Pending',
        dateCreated: '01/11/2022',
        dateCompleted: '',
        deadline: '28/11/2022',
        description: 'Tarefas 1.2'
      }
    ]
  },
  {
    id: '2',
    date: '01/12/2022',
    tasks: [
      {
        id: '1',
        status: 'Pending',
        dateCreated: '29/11/2022',
        dateCompleted: '',
        deadline: '29/11/2022',
        description: 'Tarefa de quita'
      },
      {
        id: '2',
        status: 'Pending',
        dateCreated: '29/11/2022',
        dateCompleted: '',
        deadline: '29/11/2022',
        description: 'Quinta a tarde'
      }
    ]
  }
]


export function Schedule() {

  const inputDescription = useRef(null)

  const [date, setDate] = useState<Date>(new Date())
  const [days, setDays] = useState<TTarefas[]>(dias)

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

  const changeStatus = (idDay: string, idTask: string, newStatus: string, dateCompleted: string) => {
    const newDay: TTarefas = days.find(day => day.id == idDay) as TTarefas
    newDay.tasks.map(task => task.id == idTask &&(task.status = newStatus, task.dateCompleted = dateCompleted))
    setDays([...days.filter(day => day.id != idDay), newDay])    
  }

  const removeTask = (idDay: string, idTask: string) => {
    const newDay: TTarefas = days.find(day => day.id == idDay) as TTarefas
    newDay.tasks = newDay.tasks.filter(task => task.id != idTask)
    setDays([...days.filter(day => day.id != idDay), newDay])
  }

  const saveNewTask = (descriptionNewTask:string | null, dateNewTaske:string) => {
    const newDay: TTarefas = days.find(day => day.date == date.toLocaleDateString()) as TTarefas
    newDay.tasks.push({
      id: String(newDay.tasks.length),
      description: descriptionNewTask as string,
      deadline: dateNewTaske,
      dateCreated: date.toLocaleDateString(),
      dateCompleted: '',
      status: 'Pending',
    })
    setDays([...days.filter(day => day.date != date.toLocaleDateString()), newDay])
    setSelectorDeadlineOpen(false)
    setAddTask(false)
    console.log(newDay);
  }

  const [addTask, setAddTask] = useState<boolean>(false)
  const [selectorDeadlineOpen, setSelectorDeadlineOpen] = useState<boolean>(false)
  const [deadlineNewTask, setDeadlineNewTask] = useState<Date>(new Date)

  


  return (
    <div className='schedule'>
     
      <Calendar
        date={date}
        setDate={setDate}
      />
      {
        days.map(day => day.date == date.toLocaleDateString() && day.tasks.map(
          task => <Task
            key={task.id}
            task={task}
            changeStatus={(newStatus: string, dateCompleted:string) => changeStatus(day.id, task.id, newStatus, dateCompleted)}
            removeTask={() => removeTask(day.id, task.id)}
          />
        ))
      }
      {
        addTask ?
        <VscChromeMinimize className='btRemove' onClick={() => setAddTask(false)} />
        :
        <VscAdd className='btAdd' onClick={() => setAddTask(true)} />
      }
      {
      addTask &&
        <div className='addTask' >
          <div className='inputs'>
              <input className='inputDescriptionNewTask' type="text" ref={inputDescription} />
          </div>
          <div className='inputDeadlineNewTask' title='Deadline'>
            <p>{ deadlineNewTask.toLocaleDateString() }</p>
            <VscCalendar className='btSelectorDeadline' onClick={() => setSelectorDeadlineOpen(!selectorDeadlineOpen)} />
            {
              selectorDeadlineOpen &&
              <div className='selectorDeadline'> 
                               
                <MinCalendar  date={deadlineNewTask} setDate={setDeadlineNewTask}/>
              </div>
            }
          </div>            
          <VscSave className='btSave' onClick={()=> saveNewTask(inputDescription.current.value, deadlineNewTask.toLocaleDateString())}/>          
        </div>
      }
    </div>
  )
}
