import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';

const BorrowerForm = () => {
  const [loanAmount, setLoanAmount] = useState('');

  const requestLoan = () => {
    // Call the 'borrowers.requestLoan' method
    Meteor.call('borrowers.requestLoan', Meteor.userId(), parseInt(loanAmount, 10));

    // Clear the input after requesting a loan
    setLoanAmount('');
  };

  return (
    <div>
      <h2>Request Loan</h2>
      <label>
        Loan Amount:
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
      </label>
      <button onClick={requestLoan}>Request Loan</button>
    </div>
  );
};

export default BorrowerForm;
