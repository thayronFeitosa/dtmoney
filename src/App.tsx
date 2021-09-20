import React, { useState } from 'react';
import { GlobalStyle } from './styles/globol';
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import Modal from 'react-modal';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransectionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransectionModalOpen(true)

  }

  function handleCloseNewTransactionModal() {
    setIsNewTransectionModalOpen(false)

  }
  return (
    <div className="App">
      <Header onOpenNewTtransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}>
        <h2>Cadastrar transação</h2>
      </Modal>
      <GlobalStyle />
    </div>
  );
}
