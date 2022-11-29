import { useState } from 'react'
import { Calendar } from '../Calendar'
import { Task } from '../Task'
import { TTarefas } from '../Types/types'
import { VscDiffAdded, VscSave, VscDiffRemoved } from 'react-icons/vsc'
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
    date: '29/11/2022',
    tasks: [
      {
        id: '1',
        status: 'Pending',
        dateCreated: '29/11/2022',
        dateCompleted: '',
        deadline: '29/11/2022',
        description: 'Tarefas 2.1'
      },
      {
        id: '2',
        status: 'Pending',
        dateCreated: '29/11/2022',
        dateCompleted: '',
        deadline: '29/11/2022',
        description: 'Tarefas 2.2'
      }
    ]
  }
]


export function Schedule() {
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

  const [addTask, setAddTask] = useState<boolean>(false)

  return (
    <div className='schedule'>
      <Calendar date={date} setDate={setDate} />
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
        <VscDiffRemoved className='buttonRemove' onClick={() => setAddTask(false)} />
        :
        <VscDiffAdded className='buttonAdd' onClick={() => setAddTask(true)} />
      }
      {addTask &&
        <form className='addTask'>
          <input type="text" />
          <input type="date" />
          <VscSave />
        </form>
      }
    </div>
  )
}
