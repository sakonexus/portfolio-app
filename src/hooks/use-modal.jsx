import { useState, useMemo, useEffect } from 'react';
import Modal from '../components/Modal/index';
import React from 'react';

export const useModal = (modalChildElement) => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggle = () => setModalOpen((prev) => !prev);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  const modalElement = useMemo(() => {
    if (!modalChildElement) return null;

    const enhancedModalChild = React.cloneElement(modalChildElement, {
      ...modalChildElement.props,
      modalOpen,
    });

    return (
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        {enhancedModalChild}
      </Modal>
    );
  }, [modalChildElement, modalOpen]);

  return {
    modalOpen,
    setModalOpen,
    toggle,
    modalElement,
  };
};
