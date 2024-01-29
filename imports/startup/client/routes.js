// In your routes.js or a similar file
import LenderPage from 'C:/Users/Adithya/Desktop/Project/loan-management-system/imports/ui/LenderPage';

FlowRouter.route('/lender', {
  name: 'lender',
  action() {
    mount(AppLayout, {
      content: <LenderPage />,
    });
  },
});

import AdminPage from 'C:/Users/Adithya/Desktop/Project/loan-management-system/imports/ui/AdminPage';

FlowRouter.route('/admin', {
  name: 'admin',
  triggersEnter: [isAdmin], // Ensure the user is an admin
  action() {
    mount(AppLayout, {
      content: <AdminPage />,
    });
  },
});

function isAdmin(context, redirect) {
  if (!Meteor.userId() || !Roles.userIsInRole(Meteor.userId(), 'admin')) {
    redirect('/');
  }
}
