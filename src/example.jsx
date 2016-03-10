var React = require('react');
var ReactDom = require('react-dom');

var Gravatar = require('./gravatar');

ReactDom.render(
  <Gravatar size={100} email="noopkk@gmail.com"/>,
  document.getElementById('main')
);
