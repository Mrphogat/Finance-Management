import React, { useState } from 'react';
import AddTransaction from './project1/Add';
import Summary from './project1/Summary';
import TransactionList from './project1/Trangectionlis';
import { Navbar } from './project1/Navbar';
import Footer from './project1/Footer';
import Cards from './components/MainCards';


function App() {
  const [transactions, setTransactions] = useState([
  ]);

  const handleAddTransaction = (newTransaction) => {
    
    setTransactions([newTransaction, ...transactions]);
  };

  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100 relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="https://th.bing.com/th/id/OIP.SIp53euXfH4iDKsI3oqXhgHaEI?w=294&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
        alt="animated background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-white/60 dark:bg-black/70 backdrop-blur-sm"></div>
    </div>

    <div className="relative z-10">
      <Navbar />
      <div className="max-w-2xl mx-auto mt-8 space-y-8 p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white drop-shadow-sm">💰 Smart Budget Tracker💰</h1>

        <Summary transactions={transactions} />

        <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6">
          <AddTransaction onAdd={handleAddTransaction} />
        </div>

        <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6">
          <TransactionList transactions={transactions} />
        </div>
      </div>
      <Footer/>
    </div>
  </div>
);

}

export default App;
