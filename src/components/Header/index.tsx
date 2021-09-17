import React from 'react';
import Logo from '../../assets/logo.svg'
import { Container, Content } from './styles';

export const Header: React.FC = () => (
  <Container>
    <Content>
      <img src={Logo} alt="dt money" />
      <button>
        Nova transação
      </button>
    </Content>
  </Container>
)

