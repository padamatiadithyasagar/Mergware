// imports/ui/main.jsx
import { Template } from 'meteor/templating';
import React from 'react';
import { render } from 'react-dom';
import './main.html';  // Use a relative path

import 'C:/Users/Adithya/Desktop/Project/loan-management-system/client/main.html'; // Adjust the path based on your project structure

const LoanForm = () => {
  const requestLoan = () => {
    // Handle button click here
    // You can call the method to request a loan
    const userId = Meteor.userId();
    const loanAmount = document.getElementById('loanAmount').value;

    Meteor.call('loans.requestLoan', userId, loanAmount, (error, result) => {
      if (error) {
        console.error(error.reason);
      } else {
        console.log('Loan requested successfully');
      }
    });
  };

  return (
    <form>
      <label htmlFor="loanAmount">Loan Amount:</label>
      <input type="text" id="loanAmount" name="loanAmount" />
      <button type="button" onClick={requestLoan}>
        Request Loan
      </button>
    </form>
  );
};

Template.main.helpers({
  LoanForm() {
    return LoanForm;
  },
});

Template.main.events({
  // Add any template-level events if needed
});

// Mount the LoanForm component to the 'loanForm' template
Meteor.startup(() => {
  render(<LoanForm />, document.getElementById('loanForm'));
});
