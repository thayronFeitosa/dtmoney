import React from 'react';
import { GlobalStyle } from './styles/globol';
import { Header } from './components/Header'

export function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Header />
      <GlobalStyle />
    </div>
  );
}
