var React = require('react');
var PropTypes = React.PropTypes;
var transparentBackground = require('../styles').transparentBackground;

function Prompt (props) {
	return (
		<div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={transparentBackground}>
			<h1>{props.header}</h1>
			<div className='col-sm-12'>
				<form onSubmit={props.onSubmitUser}>
					<div className='form-group'>
						<input
							className='form-control'
							placeholder='Github username'
							onChange={props.onUpdateUsername}
							value={props.username}
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

Prompt.propTypes = {
	header: PropTypes.string.isRequired,
	onSubmitUser: PropTypes.func.isRequired,
	onUpdateUsername: PropTypes.func.isRequired,
	username: PropTypes.string.isRequired
}

module.exports = Prompt;
