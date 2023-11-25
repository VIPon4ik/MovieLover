import React from 'react';
import { Oval } from 'react-loader-spinner';
import { ModalContainer } from './Loader.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

const Loader = () => {
  return createPortal(
    <ModalContainer>
      <Oval color='#eb0034' secondaryColor='#eb0034'/>
    </ModalContainer>,
    modalRoot
  );
};

export default Loader;
