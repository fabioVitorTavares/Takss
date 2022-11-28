import { useState } from 'react'
import { Calendar } from '../Calendar'
import { Task } from '../Task'
import { TTarefas, TTask } from '../Types/types'
import './style.css'


const dias = [
  {
    id: '1',
    date: '28/11/2022',
    tasks: [
      {
        id: '1',
        status: 'Pending',
        dateCreated: '2022-11-01',
        deadline: '28/11/2022',
        description: 'Tarefas 1.1'
      },
      {
        id: '2',
        status: 'Pending',
        dateCreated: '2022-11-01',
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
        deadline: '29/11/2022',
        description: 'Tarefas 2.1'
      },
      {
        id: '2',
        status: 'Pending',
        dateCreated: '29/11/2022',
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

  const changeStatus = (idDay:string, idTask:string, newStatus:string) => {
    const newDay:TTarefas = days.find(day => day.id == idDay) as TTarefas
    newDay.tasks.map(task =>  task.id == idTask && (task.status = newStatus))
    setDays([...days.filter(day => day.id != idDay), newDay])    
  }

  const removeTask = (idDay: string, idTask: string) => {
    const newDay: TTarefas = days.find(day => day.id == idDay) as TTarefas
    console.log(idDay, idTask);
    console.log(newDay);
    
    newDay.tasks.filter(task => task.id != idTask)
    console.log(newDay);
    setDays([...days.filter(day => day.id != idDay), newDay])
  }

  return (
    <div className='schedule'>
      <Calendar date={date} setDate={setDate} />
      {
        days.map(day => day.date == date.toLocaleDateString() && day.tasks.map(
          task => <Task
            key={task.id}
            task={task}
            changeStatus={(newStatus: string) => changeStatus(day.id, task.id, newStatus)}
            removeTask={() => removeTask(day.id, task.id)}
          />
        ))
      }
    </div>
  )
}
