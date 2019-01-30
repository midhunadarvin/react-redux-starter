import React from 'react';
import { connect } from 'react-redux';
import './Reports.css';

export class Reports extends React.Component {
	render() {
		return (
			<div className="container-fluid pb-4">
				<div className="row">
					<div className="col">
						<h1>Reports Page</h1>
					</div>
				</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Reports);

