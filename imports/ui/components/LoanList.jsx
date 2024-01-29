import React from 'react';

const LoanList = ({ loans, onConfirmPayment }) => (
  <ul>
    {loans.map((loan) => (
      <li key={loan._id}>
        {loan.amount} - {loan.status}
        {loan.status === 'pending' && (
          <button onClick={() => onConfirmPayment(loan._id)}>Confirm Payment</button>
        )}
      </li>
    ))}
  </ul>
);

export default LoanList;
