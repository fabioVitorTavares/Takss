import { TModal } from '../Types/types'
import './style.css'

export function ModalConfirm({description, confirm, visible}: TModal, ) {

  return (    
    <div className='modalConfirm'
      style={{visibility: visible ? 'visible' : 'hidden'}}
    >
      <h3 className='descriptionModal'>{description}</h3>
      <div className='btsModalConfirm'>
        <button
          className='btCancel'
          onClick={() => confirm(false)}
        >
          Cancel
        </button>
        <button
          className='btConfirm'
          onClick={() => confirm(true)}
        >
          Confirm
        </button>
      </div>
    </div>
  )
  
}