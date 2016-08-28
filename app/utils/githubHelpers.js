var axios = require('axios');

// Will need if I'm getting rate limited
var id = "my_client_id";
var secret = "my_secret";
var param = "?client_id=" + id + "&client_secret=" + secret;

function getUserInfo (username) {
	// return a promise
	return axios.get('https://api.github.com/users/' + username + param);
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
	}
};

module.exports = helpers;
