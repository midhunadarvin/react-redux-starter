import React from 'react';
import { connect } from 'react-redux';
import './Reports.css';

export class Reports extends React.Component {
	render() {
		return (
            <div>
                Reports
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

