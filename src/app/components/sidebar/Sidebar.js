import React from 'react';
import { Nav, ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import { toggleMenuItem } from '../../../actions/index';
import './Sidebar.css';

export class AppSidebar extends React.Component {
	openMenu(item) {
		this.props.toggleMenuItem(item);
	}

	getActiveClass(item) {
		return item.active
			? 'show'
			: 'hidden';
	}

	render() {
		return (
			<nav id="sidebar">
				<div className="sidebar-header">
					<h3>Bootstrap Sidebar</h3>
				</div>

				<ul className="list-unstyled components">
				{
					this.props.menuItems.map((item, index) => {
						return (
							<li key={index} onClick={() => this.openMenu(item)} className="list-group-item">
								<a data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
									{item.name}
									{ item.children && item.children.length &&
										<span>
											{item.active && <i className="fa fa-angle-down pull-right arrow-icon"></i>}
											{!item.active && <i className="fa fa-angle-right pull-right arrow-icon"></i>}
										</span>
									}
								</a>
								{ item.active && item.children && item.children.length &&
									<ul className={'collapse list-unstyled ' + this.getActiveClass(item)}>
										{
											item.children && item.children.map((subitem, childIndex) => {
												return (
													<li key={childIndex}>
														<a href="#">{subitem.name}</a>
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
			// <ul class="col-md-2 pr-0 nav flex-column list-group position-absolute">
			// 	{
			// 		this.props.menuItems.map((item, index) => {
			// 			return (
			// 				<li key={index} class="list-group-item" onClick={() => this.openMenu(item)}>
			// 					<span className="hidden-sm-down pl-3">{item.name}</span>
									// {
									// 	item.children &&
										// <span>
										// 	{item.active && <i className="fa fa-angle-down pull-right arrow-icon"></i>}
										// 	{!item.active && <i className="fa fa-angle-right pull-right arrow-icon"></i>}
										// </span>
									// }

									// {
									// 	item.active && item.children && item.children.length &&
									// 	<div class="list-group">
									// 		{
									// 			item.children && item.children.map((subitem, childIndex) => {
									// 				return <li key={childIndex} class="list-group-item">{subitem.name}</li>;
									// 			})
									// 		}
									// 	</div>
									// }
			// 				</li>
			// 			);
			// 		})
			// 	}
			// </ul>
		);
	}
}

const mapStateToProps = state => {
	return { 'menuItems': state.sidebarReducer.menuItems };
};

const mapDispatchToProps = dispatch => {
	return {
		'toggleMenuItem': item => dispatch(toggleMenuItem(item))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AppSidebar);

