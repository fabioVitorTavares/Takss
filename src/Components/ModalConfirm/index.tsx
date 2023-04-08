import { TModal } from '../Types/types'
import './style.css'

export function ModalConfirm({description, confirm}: TModal, ) {

  return (    
    <div className='modalConfirm'>
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