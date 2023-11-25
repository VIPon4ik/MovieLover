import React from 'react';
import { Oval } from 'react-loader-spinner';
import { ModalContainer } from './Loader.styled';
import { createPortal } from 'react-dom';
import { COLORS } from 'constants';

const modalRoot = document.getElementById('modal-root');

const Loader = () => {
  return createPortal(
    <ModalContainer>
      <Oval color={COLORS.light_red} secondaryColor={COLORS.light_red}/>
    </ModalContainer>,
    modalRoot
  );
};

export default Loader;
