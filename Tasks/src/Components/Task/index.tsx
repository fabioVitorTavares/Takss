import './style.css'
import { BsInfoSquare, BsCheckSquare, BsTrash, BsArrowLeftSquare } from 'react-icons/bs'
import { TTask, TypeTask } from '../Types/types'

export function Task({ task, changeStatus, removeTask }: TypeTask) {
  
  

  return (
    <div className='task'
      style={ task.status == 'Completed' ? {backgroundColor: '#1b9916'} : {}}
    >
      <div className='options'>
        <BsTrash className='buttonTrash' onClick={() => removeTask()} title='Delete'/>
        <BsInfoSquare className='buttonInfo'/>
        <span className='infos'>
          <div className='square'></div>
          <p>Create in { task.dateCreated }</p>
          <p>Deadline {task.deadline}</p>
          {task.status == 'Completed' && <p>Completed in { task.dateCompleted }</p>}
        </span>
        {
          task.status == 'Completed' ?
          <BsArrowLeftSquare className='buttonUndo' onClick={() => changeStatus('Pending', '')}  title='Undo'/> :
          <BsCheckSquare className='buttonCheck' onClick={() => changeStatus('Completed', new Date().toLocaleDateString())} title='Completed' />
        }
      </div>
      <h2 className='descriptionTask'>{ task.description }</h2>      
    </div>    
  )
}