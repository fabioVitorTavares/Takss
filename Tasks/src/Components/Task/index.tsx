import './style.css'
import { BsInfo } from 'react-icons/bs'
import { TypeTask } from '../Types/types'
import { VscCheck, VscDebugRestart, VscTrash } from 'react-icons/vsc'
import { useEffect, useState } from 'react'


export function Task({task, changeStatus, removeTask}: TypeTask) {

  

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
    />
  )

  const infos = (
    <span className='infos'>
      <div className='square'></div>
      <p>Create in {task.dateCreated}</p>
      <p>Deadline {task.deadline}</p>
      {task.status == 'Completed' && <p>Completed in {task.dateCompleted}</p>}
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

  const visible = ({animation: 'visible 1s ease', opacity: 1}) 
  const invisible = ({animation: 'invisible 1s ease', opacity: 0})

  const [optionsVisible, setOptionsVisible] = useState<Boolean>(false)
  const [styleOptions, setStyleOptions] = useState<object>(invisible)

  useEffect(() => {
    console.log(styleOptions);

  }, [styleOptions])

  const optionsTask = (
    <div className='optionsTask'
      style={styleOptions}
    >        
        {btInfo}
        {btTrash}
        {task.status == 'Pending' ? btCheck : btUndo}        
        {infos}
    </div>
  )


  return (
    <div
      className='task'
      style={backgroundColorTask()}
      onMouseOver={
        () => {
          !optionsVisible && setStyleOptions(visible),
          setOptionsVisible(true)
          setTimeout(() => {
              setStyleOptions({opacity: 1})
          },1000)
        }        
      }
      onMouseOut={() => {
          setStyleOptions(invisible),
          setTimeout(() => {
            setStyleOptions({opacity: 0})
          }, 1000)
        }
      }
    >
      {optionsTask}      
      {descriptionTask}     
    </div>    
  )
}