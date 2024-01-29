// In AdminPage.jsx
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Transactions } from 'C:/Users/Adithya/Desktop/Project/loan-management-system/imports/api/transactions';
import TransactionList from 'C:/Users/Adithya/Desktop/Project/loan-management-system/imports/ui/components/TransactionList';

class AdminPage extends React.Component {
  render() {
    const { transactions } = this.props;

    return (
      <div>
        <h2>Admin Dashboard</h2>
        <TransactionList transactions={transactions} />
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('transactions'); // Make sure you publish transactions on the server
  return {
    transactions: Transactions.find({}).fetch(),
  };
})(AdminPage);
