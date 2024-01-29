import { Meteor } from 'meteor/meteor';
import { Borrowers } from 'C:/Users/Adithya/Desktop/Project/loan-management-system/imports/api/borrowers';

Meteor.methods({
  'borrowers.requestLoan'(userId, loanAmount) {
    // Check if the user is logged in
    if (!this.userId) {
      throw new Meteor.Error('not-authorized', 'You must be logged in to request a loan.');
    }

    // Perform necessary checks and validations
    // For example, you might want to check if the user has the borrower role or if the loan amount is valid.

    // Insert the loan request into the Borrowers collection
    const loanRequest = {
      userId,
      loanAmount,
      status: 'Pending', // You can have statuses like 'Pending', 'Approved', 'Rejected'
      createdAt: new Date(),
    };

    // Insert the loan request into the Borrowers collection
    const loanRequestId = Borrowers.insert(loanRequest);

    // You can perform additional actions here, such as sending notifications, updating user profiles, etc.

    // Return the ID of the inserted loan request for reference
    return loanRequestId;
  },
});
