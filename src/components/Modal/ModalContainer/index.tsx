import React from 'react';

const ModalContainer = ({ modalContent, modalOpen }) => {
  return (
    <div
      id="modal-container"
      className={`bg-white absolute rounded-xl drop-shadow-md shadow-slate-700 ${
        modalOpen ? 'w-[75rem] h-[50rem]' : 'w-0 h-[0.5rem]'
      }`}
      style={{
        transition: modalOpen
          ? 'width 0.25s ease-in-out, height 0.25s ease-in-out 0.3s'
          : 'width 0.25s ease-in-out 0.3s, height 0.25s ease-in-out',
      }}
    >
      {modalContent}
    </div>
  );
};

export default ModalContainer;
