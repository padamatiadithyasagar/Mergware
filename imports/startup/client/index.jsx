import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from 'C:/Users/Adithya/Desktop/Project/loan-management-system/imports/ui/App';
import BorrowerForm from 'C:/Users/Adithya/Desktop/Project/loan-management-system/imports/ui/borrowerForm';

Meteor.startup(() => {
  render(
    <div>
      <App />
      <BorrowerForm />
    </div>,
    document.getElementById('root')
  );
});
