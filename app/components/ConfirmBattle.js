var React = require('react');

function puke (obj) {
	return <pre>{JSON.stringify(obj, null, ' ')}</pre>;
}

function ConfirmBattle (props) {
	return (
		props.isLoading
		? <p> LOADING! </p>
		: <div> BATTLE! {puke(props)} </div>
	)
}

// TODO: add proptypes

module.exports = ConfirmBattle;
