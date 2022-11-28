import './style.css'
import { BsInfoSquare, BsCheckSquare, BsTrash, BsArrowLeftSquare } from 'react-icons/bs'
import { TTask, TypeTask } from '../Types/types'

export function Task({ task, changeStatus, removeTask }: TypeTask) {
  
  
  return (
    <div className='task'
      style={ task.status == 'Completed' ? {backgroundColor: '#1b9916'} : {}}
    >
      <div className='options'>
        <BsTrash className='buttonTrash' onClick={() => removeTask()}/>
        <BsInfoSquare className='buttonInfo'/>
        {
          task.status == 'Completed' ?
          <BsArrowLeftSquare className='buttonUndo' onClick={() => changeStatus('Pending')} /> :
          <BsCheckSquare className='buttonCheck' onClick={() => changeStatus('Completed')} />
        }
      </div>
      <h2 className='descriptionTask'>{ task.description }</h2>      
    </div>    
  )
}