var React = require('react');
var ReactDom = require('react-dom');

var Gravatar = require('./gravatar');

ReactDom.render(
  <Gravatar size={100} email="someone@somehost.com"/>,
  document.getElementById('main')
);
