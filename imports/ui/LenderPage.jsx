// In LenderPage.jsx
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Loans } from 'C:/Users/Adithya/Desktop/Project/loan-management-system/imports/api/loans';
import LoanList from 'C:/Users/Adithya/Desktop/Project/loan-management-system/imports/ui/components/LoanList';

class LenderPage extends React.Component {
  handleConfirmPayment(loanId) {
    // Implement logic to confirm payment and update database
  }

  render() {
    const { loans } = this.props;

    return (
      <div>
        <h2>Lender Dashboard</h2>
        <LoanList loans={loans} onConfirmPayment={this.handleConfirmPayment} />
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('loans'); // Make sure you publish loans on the server
  return {
    loans: Loans.find({}).fetch(),
  };
})(LenderPage);
