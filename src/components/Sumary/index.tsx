import React from 'react';
import iconmeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { Container } from './styles';

export const Sumary: React.FC = () => (
  <Container>
    <div>
      <header>
        <p>Entradas</p>
        <img src={iconmeImg} alt="income" />
      </header>
      <strong>R$ 17.400,00</strong>
    </div>
    
    <div>
      <header>
        <p>Saídas</p>
        <img src={outcomeImg} alt="outcomeImg" />
      </header>
      <strong>R$ 1.259,00</strong>
    </div>
    <div className="highlight-background">
      <header>
        <p>Total</p>
        <img src={totalImg} alt="total" />
      </header>
      <strong>R$ 16.141,00</strong>
    </div>
  </Container>
);
