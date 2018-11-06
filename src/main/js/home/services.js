import React from 'react';

export class Services extends React.Component {
	render() {
		return (
			<section className="main-section" id="service">
				<div className="container">
					<h2>Services</h2>
					<h6>We offer exceptional service with complimentary hugs.</h6>
					<div className="row">
						<div className="col-lg-4 col-sm-6 wow fadeInLeft delay-05s">
							<div className="service-list animated fadeInUp delay-07s">
								<div className="service-list-col1">
									<i className="fa fa-paw"></i>
								</div>
								<div className="service-list-col2">
									<h3>Convenience</h3>
									<p>As a busy pet owner, you can schedule wherever you are.</p>
								</div>
							</div>
							<div className="service-list animated fadeInUp delay-07s">
								<div className="service-list-col1">
									<i className="fa fa-paw"></i>
								</div>
								<div className="service-list-col2">
									<h3>Availability</h3>
									<p>Schedule your pet sitting appointment with sitters that are available for your schedule.</p>
								</div>
							</div>
							<div className="service-list animated fadeInUp delay-07s">
								<div className="service-list-col1">
									<i className="fa fa-paw"></i>
								</div>
								<div className="service-list-col2">
									<h3>Services for various pets</h3>
									<p>We offer pet sitting for a variety of pets. You can count on our sitters to be able to take care of your loved one.</p>
								</div>
							</div>
							<div className="service-list animated fadeInUp delay-07s">
								<div className="service-list-col1">
									<i className="fa fa-paw"></i>
								</div>
								<div className="service-list-col2">
									<h3>110% Satisfaction</h3>
									<p>If for any reason you are dissatisfied with the services that were provided, you can report it directly to us. No robots to answer your concerns.</p>
								</div>
							</div>
						</div>
						<figure className="col-lg-8 col-sm-6  text-right wow fadeInUp delay-02s">
							<img src="../../resources/img/puppy.jpg" alt=""></img>
						</figure>

					</div>
				</div>
			</section>
		);
	}
}