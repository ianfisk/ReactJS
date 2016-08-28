var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
	// context lets us pass items to components without going through props
	// it doesn't scale well, so don't use other than for router, but this 
	// lets us pass the router down to other components. Access via this.context
	contextTypes: {
		router: React.PropTypes.object.isRequired,
	},
	getInitialState: function () {
		return {
			username: ''
		}
	},
	handleUpdateUsername: function (e) {
		this.setState({
			username: e.target.value
		});
	},
	handleSubmitUser: function (e) {
		e.preventDefault();

		var username = this.state.username;
		this.setState({
			username: ''
		});

		console.log(this.props);

		if (this.props.routeParams.playerOne) {
			// go to /battle
			this.context.router.push({
				pathname: '/battle',
				query: {
					playerOne: this.props.routeParams.playerOne,
					playerTwo: username
				}
			});
		} else {
			// go to /playerTwo
			this.context.router.push({
				pathname: '/playerTwo/' + username
			});
		}
	},
	render: function () {
		return (
			<Prompt
				onSubmitUser={this.handleSubmitUser}
				onUpdateUsername={this.handleUpdateUsername}
				header={this.props.route.header}
				username={this.state.username} />
		);
	}
});

module.exports = PromptContainer;
