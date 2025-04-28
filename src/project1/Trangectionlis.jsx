export default function TransactionList({ transactions = [] }) {
    return (
      <div className="bg-gray-50 p-4 rounded shadow">
        <h2 className="text-xl font-semibold text-center mb-2">Transaction History</h2>
        <ul className="space-y-2">
          {transactions.map((t, idx) => (
            <li
              key={idx}
              className={`p-2 rounded border-l-4 ${
                t.type === 'income' ? 'border-green-500' : 'border-red-500'
              }`}
            >
              {t.description} - ₹{t.amount}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  