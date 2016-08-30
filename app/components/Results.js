var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var UserDetails = require('./UserDetails');
var Link = require('react-router').Link;
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Glyphicon = ReactBootstrap.Glyphicon;

// import { Button } from 'react-bootstrap';

function Results (props) {
	return (
		props.isLoading
		? <div className="jumbotron col-sm-12 text-center" style={styles.transparentBackground}>
			<h1>Loading...</h1>
		</div>
		: <div className="jumbotron col-sm-12 text-center" style={styles.transparentBackground}>
			<h1>Results</h1>
			<div className='col-sm-8 col-sm-offset-2'>
				<UserDetailsWrapper header="Player One">
					<UserDetails score={props.scores[0]} info={props.playersInfo[0]} />
				</UserDetailsWrapper>
				<UserDetailsWrapper header="Player Two">
					<UserDetails score={props.scores[1]} info={props.playersInfo[1]} />
				</UserDetailsWrapper>
			</div>
			<div className='col-sm-8 col-sm-offset-2' style={styles.space}>
				<Link to="/">
					<Button bsStyle='default' bsSize='large'>
						<Glyphicon glyph="home"></Glyphicon>
					</Button>
				</Link>
			</div>
		</div>
	)
}

Results.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	scores: PropTypes.array.isRequired,
	playersInfo: PropTypes.array.isRequired
}

module.exports = Results;
