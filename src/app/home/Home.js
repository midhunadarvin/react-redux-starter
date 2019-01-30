import React from 'react';
import { connect } from 'react-redux';
import './Home.css';
import Image1 from '../../assets/img/01.jpg';
import Image2 from '../../assets/img/02.jpg';
import Image3 from '../../assets/img/03.jpg';

export class Home extends React.Component {
	render() {
		return (
			<div className="container-fluid pb-4">
				<div className="row">
					<div className="col">
						<h1>Home Page</h1>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<div className="card">
							<img className="card-img-top w-100" src={Image1} alt="Card cap"/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<button className="btn btn-primary">Go somewhere</button>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card">
							<img className="card-img-top w-100" src={Image2} alt="Card cap"/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" className="btn btn-primary">Go somewhere</a>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card">
							<img className="card-img-top w-100" src={Image3} alt="Card cap"/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" className="btn btn-primary">Go somewhere</a>
							</div>
						</div>
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

