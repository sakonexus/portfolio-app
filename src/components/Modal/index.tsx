import React, { useState } from 'react';
import ModalContainer from './ModalContainer';

const Modal = ({ modalOpen, setModalOpen, children }) => {
  const closeModal = (e) => {
    e.target.id != 'modal-container' && setModalOpen(false);
  };

  return (
    <div
      onClick={(e) => {
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
