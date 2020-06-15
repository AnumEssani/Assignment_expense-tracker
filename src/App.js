import React from 'react';
import {Header} from './components/Header';
import {IncomeExpense} from './components/IncomeExpense';
import {TransactionList} from './components/TransactionList';
import {AddTransaction} from './components/AddTransaction';
import{GlobalProvider} from './contexApi/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <IncomeExpense/>
      <TransactionList/>
      <AddTransaction/>
    </GlobalProvider>
  );
}

export default App;
