import React, { useState } from 'react';

const Modal = ({ modalOpen, setModalOpen, children }) => {
  const closeModal = (e) => {
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
      {children}
    </div>
  );
};

export default Modal;
