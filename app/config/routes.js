var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

// require components we will make
var Main = require('../components/Main');
var Home = require('../components/Home');
var PromptContainer = require('../containers/PromptContainer');

// react router maps a url to certain components
// no matter what route someone goes to, we want the main component to always be active
var routes = (
	<Router history={hashHistory} >
		<Route path='/' component={Main}>
			<IndexRoute component={Home} />
			<Route path='playerOne' header='Player One' component={PromptContainer} />
			<Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
		</Route>
	</Router>
);

module.exports = routes;
