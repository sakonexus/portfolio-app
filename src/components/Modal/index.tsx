import { ReactNode } from 'react';

const Modal = ({
  modalOpen,
  setModalOpen,
  children,
}: {
  modalOpen: boolean;
  setModalOpen: (arg0: boolean) => void;
  children: ReactNode;
}) => {
  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLElement && e.target.id === 'modal-overlay') {
      setModalOpen(false);
    }
  };

  return (
    <div
      id="modal-overlay"
      onClick={(e) => {
        e.stopPropagation();
        closeModal(e);
      }}
      className={`z-[100] fixed inset-0 flex justify-center items-center transition-all overflow-hidden duration-700 ${
        modalOpen ? 'bg-black/50 visible' : 'invisible '
      }`}
    >
      {children}
    </div>
  );
};

export default Modal;
