var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var PropTypes = React.PropTypes;

ReactDOM.render(
	routes,
	document.getElementById('app')
);
