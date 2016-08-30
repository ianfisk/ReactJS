var axios = require('axios');

// Will need if I'm getting rate limited
var id = "my_client_id";
var secret = "my_secret";
var param = "?client_id=" + id + "&client_secret=" + secret;

function getUserInfo (username) {
	// return a promise
	return axios.get('https://api.github.com/users/' + username + param);
}

function getRepos (username) {
	return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100');
}

function getTotalStars (repos) {
	console.log("REPOS", repos);
	return repos.data.reduce(function (prev, current) {
		return prev + current.stargazers_count;
	}, 0);
}

function getPlayersData (player) {
	return getRepos(player.login)
		.then(getTotalStars)
		.then(function (totalStars) {
			return {
				followers: player.followers,
				totalStars: totalStars
			}
		});
}

function calculateScores (playersData) {
	return [
		playersData[0].followers * 3 + playersData[0].totalStars,
		playersData[1].followers * 3 + playersData[1].totalStars,
	]
}

var helpers = {
	getPlayersInfo: function (usernames) {
		// Fetch data from Github
		return axios.all(usernames.map(function (username) {
			return getUserInfo(username);
		})).then(function (userInfos) {
			return userInfos.map(function (userInfo) {
				return userInfo.data;
			})
		}).catch(function (error) {
			console.warn('Error in getPlayersInfo: ' + error);
		});
	},
	battle: function (players) {
		var playerOneData = getPlayersData(players[0]);
		var playerTwoData = getPlayersData(players[1]);

		return axios.all([playerOneData, playerTwoData])
			.then(calculateScores)
			.catch(function (error) {
				console.warn("Error in battle: " + error);
			})
	}
};

module.exports = helpers;
