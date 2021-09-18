import React from 'react';
import { GlobalStyle } from './styles/globol';
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'

export function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <GlobalStyle />
    </div>
  );
}
