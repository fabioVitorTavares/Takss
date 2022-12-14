import './style.css'
import { BsInfo } from 'react-icons/bs'
import { TypeTask } from '../Types/types'
import { VscCheck, VscDebugRestart, VscTrash } from 'react-icons/vsc'
import { useState } from 'react'
import { ModalConfirm } from '../ModalConfirm'


export function Task({ task, changeStatus, removeTask }: TypeTask) {
  
  const [opacityInfos, setOpacityInfos] = useState<number>(0)
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [modalConfirm, setModalConfirm] = useState<Function>(()=>{})
  const [modalDescription, setModalDescription] = useState<string>('')
  
  

 
  const infos = (
    <span className='infos'
      style={{ opacity: `${opacityInfos}` }}
      
    >
      <div className='square'></div>
      <p>Status {task.status}</p>
      <p>Create in {task.dateCreated}</p>
      <p>Deadline {task.deadline}</p>
      {task.status == 'Completed' && <p>Completed {task.dateCompleted}</p>}
    </span>
  )
  
  const btInfo = (
    <>
      <BsInfo
        className='bt btInfo'
        onClick={() => setOpacityInfos(opacityInfos ? 0 : 1)}
      />
      {infos}
    </>
  )

  const confirmTrash = (ok: Boolean) => {
    ok && removeTask()
    setModalVisible(false)
  }  

  const btTrash = (
    <VscTrash
      className='bt btTrash'
      title='Delete'
      onClick={() => {
        setModalDescription('Delete Task?')
        setModalVisible(true)
        setModalConfirm(() => confirmTrash)
      }}
    />
  )

  const confirmChangeStatus = (ok: boolean) => {    
    ok && changeStatus('Completed', new Date().toLocaleDateString())
    setModalVisible(false)
  }

  const btCheck = (
    <VscCheck
      className='bt btCheck'
      title='Completed' 
      onClick={
        () => {
          setModalDescription('Task Completed?')
          setModalVisible(true)
          setModalConfirm(() => confirmChangeStatus)
        }
      }
    />
  )

  const confirmUndoStatus = (ok: Boolean) => {
    ok && changeStatus('Pending', '')
    setModalVisible(false)
  }

  const btUndo = (
    <VscDebugRestart
      className='bt btUndo'
      title='Undo'
      onClick={
        () => {
          setModalDescription('Task Uncompleted?')
          setModalVisible(true)
          setModalConfirm(() => confirmUndoStatus)
        }
      }
    />
  )

  const descriptionTask = (
    <h3 className='descriptionTask'>{ task.description }</h3>
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
      
    </div>
  )




  return (
    <div
      className='task'
      style={backgroundColorTask()}      
    >
      {optionsTask}      
      {descriptionTask}
      {modalVisible &&
        <ModalConfirm
          description={modalDescription}
          confirm={modalConfirm}        
        />
      }
    </div>    
  )
}