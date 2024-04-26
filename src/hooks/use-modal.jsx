import { useState, useEffect } from 'react';
import Modal from '../components/Modal/index';
import React from 'react';

export const useModal = (modalChildElement) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalElement, setModalElement] = useState(null);
  const toggle = () => setModalOpen(!modalOpen);

  useEffect(() => {
    if (modalChildElement) {
      const enhancedModalElement = React.cloneElement(modalChildElement, {
        ...modalChildElement.props,
        modalOpen: modalOpen,
      });

      console.log('enhancedModalElement', enhancedModalElement);

      modalChildElement &&
        setModalElement(
          <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            {enhancedModalElement}
          </Modal>
        );
    }
  }, [modalChildElement, modalOpen]);

  return {
    modalOpen,
    setModalOpen,
    toggle,
    modalElement,
  };
};
