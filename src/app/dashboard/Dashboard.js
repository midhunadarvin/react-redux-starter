import React from 'react';
import { connect } from 'react-redux';
import AppNavbar from '../components/navbar/Navbar';
import AppSidebar from '../components/sidebar/Sidebar';
import Home from '../home/Home';
import Reports from '../reports/Reports';
import { Route, Switch, Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
import './Dashboard.css';

export class Dashboard extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <AppSidebar></AppSidebar>
                <div className="content-wrapper container-fluid p-0 mh-100">
                    <AppNavbar></AppNavbar>
                    <div className="container-fluid pt-3">
                        <div className="row">
                            <div className="col">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a>Home</a></li>
                                        <li className="breadcrumb-item"><a>Library</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Data</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <Switch>
                        <Route path="/home" render={() => <Home />} />
                        <Route path="/reports" render={() => <Reports />} />
                        <Redirect from="/" to="/home" />
                    </Switch>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));

