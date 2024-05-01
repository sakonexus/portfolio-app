import React, { useState } from 'react';
import ModalContainer from './ModalContainer';

const Modal = ({ modalOpen, setModalOpen, children }) => {
  const closeModal = (e) => {
    e.preventDefault();
    e.target.id == 'modal-overlay' && setModalOpen(false);
  };

  return (
    <div
      id="modal-overlay"
      onClick={(e) => {
        e.stopPropagation();
        closeModal(e);
      }}
      className={`z-[100] fixed inset-0 flex justify-center items-center transition-all overflow-hidden duration-700 ${
        modalOpen ? 'bg-black bg-opacity-40 visible ' : 'invisible '
      }`}
    >
      <ModalContainer
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
        modalContent={children}
      />
    </div>
  );
};

export default Modal;
