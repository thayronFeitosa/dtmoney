import React from 'react';
import Modal from 'react-modal'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose(): void;
}
// import { Container } from './styles';

export const NewTrasactionModal: React.FC <NewTransactionModalProps> = ({
  isOpen,
  onRequestClose
}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}>
    <h2>Cadastrar transação</h2>
  </Modal>
)
