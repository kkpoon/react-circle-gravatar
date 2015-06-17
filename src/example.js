var React = require('react');

var Gravatar = require('./react-gravatar');

React.render(
  <Gravatar size={100} email="someone@somewhere.com"/>,
  document.getElementById('main')
);
