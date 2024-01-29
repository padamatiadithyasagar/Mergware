// imports/api/transactions.js
import { Mongo } from 'meteor/mongo';

export const Transactions = new Mongo.Collection('transactions');

Meteor.methods({
  'transactions.addTransaction'(userId, amount, type) {
    // Check if the user is logged in
    if (!this.userId) {
      throw new Meteor.Error('not-authorized', 'You must be logged in to perform this transaction.');
    }

    // Perform necessary checks and validations

    // Insert the transaction into the Transactions collection
    Transactions.insert({
      userId,
      amount,
      type, // You can have types like 'Credit' or 'Debit'
      createdAt: new Date(),
    });
  },

  // Add more methods related to transactions as needed
});
export default Transactions;