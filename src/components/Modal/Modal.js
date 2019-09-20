import React from 'react'
import ReactDOM from 'react-dom';
import './modal.scss';

function Modal (props) {
  if (!props.isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-container">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        {props.children}
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal
