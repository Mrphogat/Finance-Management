export default function Summary({ transactions }) {
    const safeTransactions = Array.isArray(transactions) ? transactions : [];
  
    const income = safeTransactions
      .filter((t) => t.type === 'income')
      .reduce((acc, t) => acc + t.amount, 0);
  
    const expense = safeTransactions
      .filter((t) => t.type === 'expense')
      .reduce((acc, t) => acc + t.amount, 0);
  
    return (
      <div className="bg-blue-100 p-4 rounded shadow mb-4">
        <h1 className="text-xl font-semibold text-center mb-2">Budget Summary</h1>
        <div className="flex justify-between">
          <p>💵 Income: <span className="font-medium">₹{income}</span></p>
          <p>💸 Expense: <span className="font-medium">₹{expense}</span></p>
          <p>📊 Balance: <span className="font-medium">₹{income - expense}</span></p>
        </div>
      </div>
    );
  }
  