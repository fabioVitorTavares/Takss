import './style.css'
import { BsInfo } from 'react-icons/bs'
import { TypeTask } from '../Types/types'
import { VscCheck, VscDebugRestart, VscTrash } from 'react-icons/vsc'
import { useState } from 'react'


export function Task({ task, changeStatus, removeTask }: TypeTask) {

  const [opacityInfos, setOpacityInfos] = useState<number>(0)

  const btTrash = (
    <VscTrash
      className='bt btTrash'
      title='Delete'
      onClick={() => removeTask()}
    />
  )
  
  const btInfo = (
    <BsInfo
      className='bt btInfo'
      onClick={() => setOpacityInfos(opacityInfos ? 0 : 1)}
    />
  )

  const infos = (
    <span className='infos'
      style={{ opacity: `${opacityInfos}` }}
      
    >
      <div className='square'></div>
      <p>Create in {task.dateCreated}</p>
      <p>Deadline {task.deadline}</p>
      {task.status == 'Completed' && <p>Completed {task.dateCompleted}</p>}
    </span>
  )

  const btCheck = (
    <VscCheck
      className='bt btCheck'
      title='Completed' 
      onClick={() => changeStatus('Completed', new Date().toLocaleDateString())}
    />
  )

  const btUndo = (
    <VscDebugRestart
      className='bt btUndo'
      title='Undo'
      onClick={() => changeStatus('Pending', '')}
    />
  )

  const descriptionTask = (
    <h2 className='descriptionTask'>{ task.description }</h2>
  )

  const backgroundColorTask = () => {
      return task.status == 'Completed' ? {backgroundColor: '#1b9916'} : {}
  }


  

  const optionsTask = (
    <div className='optionsTask'>
      <div className='btsOptionsTask'>
        {btInfo}
        {btTrash}
        {task.status == 'Pending' ? btCheck : btUndo}        
      </div>       
      {infos}
    </div>
  )


  return (
    <div
      className='task'
      style={backgroundColorTask()}      
    >
      {optionsTask}      
      {descriptionTask}   
    </div>    
  )
}