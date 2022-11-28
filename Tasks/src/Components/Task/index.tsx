import './style.css'
import { BsInfoSquare, BsCheckSquare, BsTrash } from 'react-icons/bs'

export function Task() {
  
  return (
    <div className='task'>
      <div className='options'>
        <BsTrash className='buttonTrash'/>
        <BsInfoSquare className='buttonInfo'/>
        <BsCheckSquare className='buttonCheck' />
      </div>
      <h2 className='descriptionTask'>Taks </h2>

    </div>
    
  )
}