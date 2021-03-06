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
				<div className="row mb-3">
					<div className="col">
						<div className="jumbotron no-shadow">
							<div className="container">
								<h1 className="display-3">Hello, world!</h1>
								<p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
								<p><a href="#/" className="btn btn-primary btn-lg" role="button">Learn more »</a></p>
							</div>
						</div>
					</div>
				</div>
				<div className="d-flex flex-wrap">
					<div className="col col-md-4 col-sm-3 mb-3">
						<div className="card">
							<div className="card-img-top">
								<img className="w-100 mh-100" src={Image1} alt="Card cap" />
							</div>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<button className="btn btn-primary">Go somewhere</button>
							</div>
						</div>
					</div>
					<div className="col col-md-4 col-sm-3 mb-3">
						<div className="card">
							<div className="card-img-top">
								<img className="w-100 mh-100" src={Image2} alt="Card cap" />
							</div>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#/" className="btn btn-primary">Go somewhere</a>
							</div>
						</div>
					</div>
					<div className="col col-md-4 col-sm-3 col-xs-12 mb-3">
						<div className="card">
							<div className="card-img-top">
								<img className="w-100 mh-100" src={Image3} alt="Card cap" />
							</div>

							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#/" className="btn btn-primary">Go somewhere</a>
							</div>
						</div>
					</div>

					<div className="col col-md-4 col-sm-3 col-xs-12 mb-3">
						<div className="card">
							<div className="card-img-top">
								<img className="w-100 mh-100" src={Image2} alt="Card cap" />
							</div>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#/" className="btn btn-primary">Go somewhere</a>
							</div>
						</div>
					</div>
					<div className="col col-md-4 col-sm-3 col-xs-12 mb-3">
						<div className="card">
							<div className="card-img-top">
								<img className="w-100 mh-100" src={Image3} alt="Card cap" />
							</div>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#/" className="btn btn-primary">Go somewhere</a>
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

