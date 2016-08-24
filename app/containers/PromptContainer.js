var React = require('react');
var transparentBackground = require('../styles').transparentBackground;

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
	onUpdateUsername: function (e) {
		this.setState({
			username: e.target.value
		})
	},
	onSubmitUser: function (e) {
		e.preventDefault();
		var username = this.state.username;
		this.setState({
			username: ''
		});

		if (this.props.routeParams.playerOne) {
			// go to /battle
			this.context.router.push({
				pathname: '/battle',
				query: {
					playerOne: this.props.routeParams.playerOne,
					playerTwo: this.state.username
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
			<div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={transparentBackground}>
				<h1>{this.props.route.header}</h1>
				<div className='col-sm-12'>
					<form onSubmit={this.onSubmitUser}>
						<div className='form-group'>
							<input
								className='form-control'
								placeholder='Github username'
								onChange={this.onUpdateUsername}
								value={this.state.username}
								type='text' />
						</div>

						<div className='form-group col-sm-4 col-sm-offset-4'>
							<button className='btn btn-block btn-success' type='submit'>
								Continue
							</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
});

module.exports = PromptContainer;
