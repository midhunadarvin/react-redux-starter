import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleMenuItem } from '../../../actions/index';
import './Sidebar.css';

export class AppSidebar extends React.Component {

	getActiveClass(item) {
		return item.active
			? 'show'
			: 'hidden';
	}

	navigate(item) {
		this.props.toggleMenuItem(item);
		if (item.path) {
			this.props.history.push(item.path);
		}
	}

	render() {
		return (
			<div className="card">
				<nav id="sidebar" className={this.props.sidebarActive ? 'active' : ''}>
					<div className="sidebar-header">
						<h3>Bootstrap Sidebar</h3>
					</div>

					<ul className="list-unstyled components">
						{
							this.props.menuItems.map((item, index) => {
								return (
									<li key={index} onClick={() => this.navigate(item)} className={`list-group-item ${item.active ? 'active' : ''}`}>
										<a data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
											{item.name}
											{item.children && item.children.length &&
												<span>
													{item.active && <i className="fa fa-angle-down pull-right arrow-icon"></i>}
													{!item.active && <i className="fa fa-angle-right pull-right arrow-icon"></i>}
												</span>
											}
										</a>
										{item.active && item.children && item.children.length &&
											<ul className={'collapse list-unstyled ' + this.getActiveClass(item)}>
												{
													item.children && item.children.map((subitem, childIndex) => {
														return (
															<li key={childIndex}>
																<a>{subitem.name}</a>
															</li>
														);
													})
												}
											</ul>
										}
									</li>
								);
							})
						}
					</ul>
				</nav>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		'menuItems': state.sidebarReducer.menuItems,
		'sidebarActive': state.sidebarReducer.sidebarActive
	};
};

const mapDispatchToProps = dispatch => {
	return {
		'toggleMenuItem': item => dispatch(toggleMenuItem(item))
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppSidebar));

