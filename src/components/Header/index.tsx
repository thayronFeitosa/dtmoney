import React, { useState } from 'react';
import Logo from '../../assets/logo.svg'
import { Container, Content } from './styles';
import Modal from 'react-modal';

interface IProps {
  onOpenNewTtransactionModal(): void;
}


export const Header: React.FC<IProps> = ({ onOpenNewTtransactionModal }) => {


  return (
    <Container>
      <Content>
        <img src={Logo} alt="dt money" />
        <button onClick={onOpenNewTtransactionModal}>
          Nova transação
      </button>

      </Content>
    </Container>

  )
}


