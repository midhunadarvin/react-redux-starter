import React from 'react';
import { connect } from 'react-redux';
import AppNavbar from '../components/navbar/Navbar';
import AppSidebar from '../components/sidebar/Sidebar';
import './Home.css';

export class Home extends React.Component {
	render() {
		return (
            <div>
                <AppNavbar></AppNavbar>
                <div className="container-fluid ">
                    <div className="row">
                        <AppSidebar></AppSidebar>
                        <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
                            App Container
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

