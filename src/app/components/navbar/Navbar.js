import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleSidebar } from '../../../actions';
import './Navbar.css';

class AppNavbar extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			'isOpen': false
		};
	}
	toggle() {
		this.setState({
			'isOpen': !this.state.isOpen
		});
	}
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg">
					<span className="navbar-toggler-icon" onClick={this.props.toggleSidebar}></span>
					<a className="navbar-brand" href="#">Navbar</a>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Link</a>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Dropdown
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<a className="dropdown-item" href="#">Action</a>
									<a className="dropdown-item" href="#">Another action</a>
									<div className="dropdown-divider"></div>
									<a className="dropdown-item" href="#">Something else here</a>
								</div>
							</li>
							<li className="nav-item">
								<a className="nav-link disabled" href="#">Disabled</a>
							</li>
						</ul>
						<form className="form-inline my-2 my-lg-0">
							<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
							<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
						</form>
					</div>
				</nav>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = dispatch => {
	return {
		'toggleSidebar': () => dispatch(toggleSidebar())
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppNavbar));
