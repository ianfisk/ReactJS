var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function () {
		return {
			isLoading: true,
			playerInfo: []
		}
	},
	componentDidMount: function () {
		var query = this.props.location.query;
		
		githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
			.then(function (playersInfo) {
				this.setState({
					isLoading: false,
					playerInfo: [playersInfo[0], playersInfo[1]]
				});
			}.bind(this));
	},
	render: function () {
		return (
			<ConfirmBattle
				isLoading={this.state.isLoading}
				playerInfo={this.state.playerInfo} />
		)
	}
});

module.exports = ConfirmBattleContainer;
