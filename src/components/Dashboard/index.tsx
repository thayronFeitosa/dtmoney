import React from 'react';

import { Container } from './styles';
import { Sumary } from '../Sumary'
import { TransactionsTable } from '../Transactions';

export const Dashboard: React.FC = () => (
  <Container>
    <Sumary/>
    <TransactionsTable/>
  </Container>
)
