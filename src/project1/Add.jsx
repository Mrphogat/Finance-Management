import { useState } from 'react';

export default function AddTransaction({ onAdd = () => {} }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description.trim() || !amount.trim()) return;

    onAdd({
      description: description.trim(),
      amount: parseFloat(amount),
      type,
    });

    
    setDescription('');
    setAmount('');
    setType('income');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold text-gray-700 text-center">Add Transaction</h2>
      
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="p-2 border rounded"
      />
      
      <input
        type="number"
        placeholder="Amount ($)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="p-2 border rounded"
      />
      
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      
      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white py-2 rounded"
      >
        Add
      </button>
    </form>
  );
}
