import {
  useEffect,
  useState,
  useRef,
  useContext
} from 'react'
import { Task } from '../Task'
import {
  TDateSetings,
  TTask,
  TypeTheme
} from '../Types/types'
import {
  BiRightArrow,
  BiLeftArrow
} from 'react-icons/bi'
import './style.css'
import { ThemeContext } from '../../Routes'
import ReactDOM from 'react-dom'


const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Sarturday']

export function Schedule({date, setDate}: TDateSetings){
 
  const theme = useContext<TypeTheme>(ThemeContext)
  const [addTaskOpen, setAddTaskOpen] = useState<boolean>(false)
  const [deadlineNewTask, setDeadlineNewTask] = useState<Date>(new Date)
  const [descriptionNewTask, setDescriptionNewTask] = useState<string>('')
  const [tasks, setTasks] = useState<TTask[]>([]);
  const [stateSchedule, setStateSchedule] = useState<Boolean>(false)
  const inputDescriptionNewTask = useRef<HTMLInputElement>(null)
  
  const fetchInBackEnd = async () => {    
    const url = `https://tasks-api-production-ad11.up.railway.app/?date=${date.toLocaleDateString()}`
    const currentDay = await fetch(url)
    const currentTasks = await currentDay.json() ?? []
    setTasks(currentTasks);    
  }

  useEffect(() => {
    fetchInBackEnd()
    setAddTaskOpen(false)
  }, [date, stateSchedule])
  
  const changeStatus = async (idTask: number, newStatus: string, dateCompleted: string) => {
    const url = 'https://tasks-api-production-ad11.up.railway.app/'

    await fetch(url,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT',      
      body: JSON.stringify(
        {
          date: date.toLocaleDateString(),
          idTask,
          newStatus,
          dateCompleted
        })
    })
    setStateSchedule(!stateSchedule)
  }

  const removeTask = async (idTask: number) => {
    const url = 'https://tasks-api-production-ad11.up.railway.app/'

    await fetch(url,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'DELETE',      
      body: JSON.stringify(
        {
          date: date.toLocaleDateString(),
          idTask          
        })
    })
    setStateSchedule(!stateSchedule)
  }

  const saveNewTask = async (description: string, deadline: string) => {
    const newTask = {      
      date: date.toLocaleDateString(),
      status: 'Pending',
      dateCreated: new Date().toLocaleDateString(),
      dateCompleted: '',
      deadline,
      description
    }

    const url = 'https://tasks-api-production-ad11.up.railway.app/'
    await fetch(url,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(newTask)
    })
    
    inputDescriptionNewTask.current?.value && (
      inputDescriptionNewTask.current.value = ''
    )

    fetchInBackEnd()
    setDescriptionNewTask('')
    setDeadlineNewTask(date)
    setStateSchedule(!stateSchedule) 
  }
  
  const btNewTask = (
    <button
      className='btNewTask'
      onClick={(e) => {
          e.stopPropagation()
          setAddTaskOpen(!addTaskOpen)
        }
      }> 
      New Task
    </button>
  )

  const getDeadlineMonth = () => {
    if (deadlineNewTask.getMonth() > 8) {
      return deadlineNewTask.getMonth() + 1      
    }
    return `0${deadlineNewTask.getMonth() + 1}`
  }

  const bar = (
    <p
      style={{
        backgroundColor: `var(${theme.color})`,
        width: '0.05em'
      }}
    />
  )


  const log = (e: any) => {
    if (e.currentTarget.scrollTop == 1) {
      console.log('down');
    }
    else if (e.currentTarget.scrollTop == 0) {
      console.log('up');
    }
  }



  const deadline = (
    <div className='deadline'>
      <p>Deadline</p>
      <div className='selector-deadline'>
        {bar}
        <div
          className='selector-day'          
          onScroll={(e)=> log(e)}
          
        >
          {deadlineNewTask.getDate()}           
        </div>
        {bar}
        <div className='selector-month'>
          {getDeadlineMonth()}
        </div>
        {bar}
        <div className='selector-year'>
          {deadlineNewTask.getFullYear()}
        </div>
        {bar}
      </div>
    </div>
  )



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

  addEventListener('click', (event) => { 
    setAddTaskOpen(false)
  })

  const addTask = (
    <div className='addTask'
      onClick={e => e.stopPropagation() }
      style={{border: `0.1em solid var(${theme.color})`}}
    >
      <div className='inputs'>
        <input
          autoFocus={true}
          ref={inputDescriptionNewTask}
          className='inputDescriptionNewTask'
          type='text'
          onChange={(e) => setDescriptionNewTask(e.target.value)}
          style={{caretColor: `var(${theme.color})` }}	
        />
        <div
          className='inputDeadlineNewTask'
          title='Deadline'
        >
        {deadline}
          
          
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
    <div
      className='schedule'
      style={{borderLeft: `0.1em solid var(${theme.color})`}}
    >
      
      <div className='titleCalendar'>
        <BiLeftArrow
          onClick={(e) => {
            e.stopPropagation()
            dayPrevious()
            }
          }
        />
        <div className='titleCalendarContent'>
          <h1>{daysOfWeek[date.getDay()]}</h1>
          <span className='currentDate'>
            {date.toLocaleDateString()}
          </span>
        </div>
        <BiRightArrow
          onClick={(e) => {
            e.stopPropagation()
            nextDay()
            }
          }
        />
      </div>
      <div className='tasks'>       
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
                removeTask={
                  () => removeTask(task.id)
                }
              />
          )
        }
      </div>
      {btNewTask}
      {addTaskOpen && addTask}
    </div>
  )
}
