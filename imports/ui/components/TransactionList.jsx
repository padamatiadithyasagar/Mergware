// In TransactionList.jsx
import React from 'react';

const TransactionList = ({ transactions }) => (
  <ul>
    {transactions.map((transaction) => (
      <li key={transaction._id}>
        {transaction.amount} - {transaction.status}
      </li>
    ))}
  </ul>
);

export default TransactionList;
