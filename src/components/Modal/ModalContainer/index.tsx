import { ReactNode } from 'react';

interface ModalContainer {
  modalOpen: boolean;
  children: ReactNode;
}

const ModalContainer = ({ modalOpen, children }: ModalContainer) => {
  return (
    <div
      id="modal-container"
      className={`bg-white absolute drop-shadow-md shadow-slate-700 overflow-y-scroll lg:overflow-hidden lg:rounded-xl ${
        modalOpen
          ? 'sm:w-screen sm:h-screen xl:w-3/4 xl:h-3/4'
          : 'w-0 h-[0.5rem]'
      }`}
      style={{
        transition: modalOpen
          ? 'width 0.25s ease-in-out, height 0.25s ease-in-out 0.3s'
          : 'width 0.25s ease-in-out 0.3s, height 0.25s ease-in-out',
      }}
    >
      {children}
    </div>
  );
};

export default ModalContainer;
