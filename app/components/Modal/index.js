import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ModalContainer = styled.div`
  padding-right: 0 !important;
  .header {
    border-bottom: none;
  }
  .close {
    opacity: 1;
    &:focus {
      outline: none;
    }
    &:hover {
      opacity: 1;
    }
  }
  .modal-dialog {
    width: fit-content;
  }
  .modal-content {
    width: 100%;
    border-radius: 10px;

    .modal-header {
      border: none;
      padding-bottom: 0px;
    }
    .modal-body {
      text-align: center;
    }
  }

  @media ${ /* istanbul ignore next */ props => props.theme.maxPhablet}{
    .modal-body {
      padding: 0px;
    }
    .modal-content {
      width: auto;
      min-height: 900px;
      border-radius: 0px;
      border: none;
    }

    .modal-dialog {
      margin: 0px;
      width: 100%;
    }

    .close {
      svg{
        height: 20px;
        width: 20px;
      }
    }
  }
`;

const Modal = ({ ModalBody, className, id, product, addToCart, cartItems }) => (
  <ModalContainer className={`modal ${className}`} role="dialog" id={`${id}`}>
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <FontAwesomeIcon className="font-awesome fa-2x" icon={faTimes}/>
          </button>
        </div>
        <div className="modal-body">
          <ModalBody product={product} addToCart={addToCart} cartItems={cartItems} />
        </div>
      </div>
    </div>
  </ModalContainer>
)

export default Modal;
