import React from 'react';
import { connect } from 'react-redux';
import AppNavbar from '../components/navbar/Navbar';
import AppSidebar from '../components/sidebar/Sidebar';
import Home from '../home/Home';
import Reports from '../reports/Reports';
import { Route, Switch, Redirect } from 'react-router';
import './Dashboard.css';

export class Dashboard extends React.Component {
	render() {
		return (
            <div>
                <AppNavbar></AppNavbar>
                <div className="container-fluid ">
                    <div className="row">
                        <AppSidebar></AppSidebar>
                        <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
                            <div className="col">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                                        <li class="breadcrumb-item"><a href="#">Library</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Data</li>
                                    </ol>
                                </nav>
                            </div>
                            <Switch>
                                <Route path="/home" render={() => <Home />}/>
                                <Route path="/reports" render={() => <Reports />} />
                                <Redirect from="/" to="/home"/>
                            </Switch>
                        </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

