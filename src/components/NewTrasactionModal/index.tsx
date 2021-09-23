import React from 'react';
import Modal from 'react-modal';
import { Container } from './styles';
import close from '../../assets/close.svg';


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose(): void;
}

export const NewTrasactionModal: React.FC<NewTransactionModalProps> = ({
  isOpen,
  onRequestClose
}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
  >
    <button
      type="button"
      onClick={onRequestClose}
      className="react-modal-close">
      <img src={close} alt="Fechar modal" />
    </button>
    <Container>

      <h2>Cadastrar transação</h2>
      <input type="" placeholder="Título" />
      <input type="text" placeholder="Valor" />
      <input type="text" placeholder="Categoria" />
      <button type="submit" > Cadastar</button>
    </Container>

  </Modal>
)
