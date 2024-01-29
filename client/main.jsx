import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App.jsx';  // Use a relative path

Meteor.startup(() => {
  const container = document.getElementById('react-target');
  render(<App />, container);
});