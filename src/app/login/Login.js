import React from 'react';
import { connect } from 'react-redux';
import './Login.css';

export class Login extends React.Component {
	render() {
		return (
			<div className="container-fluid pb-4">
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = dispatch => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

