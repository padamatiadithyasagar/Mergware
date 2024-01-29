// imports/api/loans.js
import { Mongo } from 'meteor/mongo';

import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'loans.requestLoan'(userId, loanAmount) {
    // Check if the user is logged in
    if (!this.userId) {
      throw new Meteor.Error('not-authorized', 'You must be logged in to request a loan.');
    }

    // Perform necessary checks and validations

    // Insert the loan request into the Loans collection
    Loans.insert({
      userId,
      loanAmount,
      status: 'Pending', // You can have statuses like 'Pending', 'Approved', 'Rejected'
      createdAt: new Date(),
    });
  },

  'loans.confirmPayment'(loanId) {
    // Logic to confirm loan payment
    // Update the loan status or perform necessary operations
  },
});

export const Loans = new Mongo.Collection('loans');
