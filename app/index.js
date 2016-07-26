var React = require('react');
var ReactDOM = require('react-dom');

var USER_DATA = {
	name: 'Ian Fisk',
	username: 'ianfisk',
	image: 'http://d39kbiy71leyho.cloudfront.net/wp-content/uploads/2016/05/09170020/cats-politics-TN.jpg'
};

var ProfilePic = React.createClass({
	render: function () {
		return <img src={this.props.imageUrl} style={{height: 100, width: 150}}></img>
	}
});

var ProfileLink = React.createClass({
	render: function () {
		return (
			<div>
				<a href={'https://github.com/' + this.props.username} target='_blank'>
					{this.props.username}
				</a>
			</div>
		);
	}
});

var ProfileName = React.createClass({
	render: function () {
		return (
			<div>{this.props.name}</div>
		);
	}
});

var Avatar = React.createClass({
	render: function () {
		return (
			<div>
				<ProfilePic imageUrl={this.props.user.image} />
				<ProfileName name={this.props.user.name} />
				<ProfileLink username={this.props.user.username} />
			</div>
		);
	}
});

ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));
