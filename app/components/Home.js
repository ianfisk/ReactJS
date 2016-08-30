var React = require('react');
var transparentBackground = require('../styles').transparentBackground;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;	

var Home = React.createClass({
	render: function () {
		return (
			<div className='jumbotron col-sm-12 text-center' style={transparentBackground}>
				<h1>Github Battle</h1>
				<p className='lead'>One battle to rule them all</p>
				<Link to='/playerOne'>
					<button type='button' className='btn btn-lg btn-success'>Get Started</button>
				</Link>
			</div>
		)
	}
});

module.exports = Home;
