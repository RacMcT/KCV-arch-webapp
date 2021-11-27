import React from "react";
import MainScreen from "../../pages/main";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "react-bootstrap/Card";

function Dashboard() {
	return (
		<MainScreen title='DASHBOARD'>
			<body class='d-flex flex-column min-vh-100'>
				<div class='wrapper flex-grow-1'>
					<div class='dashboardContainer'>
						<Card>
							<Card.Img variant='top' src='holder.js/100px160' />
							<Card.Body>
								<Card.Title>About Archaeology</Card.Title>
								<Card.Text>
									Archaeology provides us with the opportunity to learn about
									past cultures through the study of what was left behind and
									environmental changes. Studying these artifacts and the
									context we find them in helps to provide us with some insight
									about what life was like for past peoples.
								</Card.Text>
								<Card.Link href='./pages/contentPages/aboutArch.js'>
									Go To Page
								</Card.Link>
							</Card.Body>
						</Card>
						<Card>
							<Card.Img variant='top' src='holder.js/100px160' />
							<Card.Body>
								<Card.Title>Excavation History</Card.Title>
								<Card.Text>
									The Koshkonong Creek Village (47JE0379) in Jefferson County,
									Wisconsin is an Oneota habitation site occupied between AD
									1050 and 1400. Along with excavations at the nearby Crescent
									Bay Hunt Club (47JE0904), this site has been the focus of
									field school excavations by the University of Wisconsin –
									Milwaukee since 2010.
								</Card.Text>
								<Card.Link href='./pages/contentPages/excavHist.js'>
									Go To Page
								</Card.Link>
							</Card.Body>
						</Card>
						<Card>
							<Card.Img variant='top' src='holder.js/100px160' />
							<Card.Body>
								<Card.Title>Technology</Card.Title>
								<Card.Text>
									A well-documented diagnostic trait of an Oneota prehistoric
									site is the ceramic technology. Oneota groups manufactured
									shell-tempered globular jars with a constricted hole and a
									rounded bottom. Particularly unique to southeastern WI is the
									use of digging sticks for agriculture. Lithics (stone tools)
									include small, unnotched triangular arrow points, end scrapers
									and sandstone abraders.
								</Card.Text>
								<Card.Link href='./pages/contnetPages/technology.js'>
									Go To Page
								</Card.Link>
							</Card.Body>
						</Card>
						<Card>
							<Card.Img variant='top' src='holder.js/100px160' />
							<Card.Body>
								<Card.Title>Artifact Gallery</Card.Title>
								<Card.Text>
									This is a collection of artifacts excavated at the site and
									used for research analyses for over a decade in Milwaukee.
								</Card.Text>
								<Card.Link href='./pages/contnetPages/artifactGallery.js'>
									Go To Page
								</Card.Link>
							</Card.Body>
						</Card>
						<Card>
							<Card.Img variant='top' src='holder.js/100px160' />
							<Card.Body>
								<Card.Title>Ongoing Research</Card.Title>
								<Card.Text>
									Ongoing research at this site includes active field schools,
									laboratory analyses, stable isotopic analyses, and GIS and GPR
									research.
								</Card.Text>
								<Card.Link href='./pages/contnetPages/ongoingResearch.js'>
									Go To Page
								</Card.Link>
							</Card.Body>
						</Card>
						<Card>
							<Card.Img variant='top' src='holder.js/100px160' />
							<Card.Body>
								<Card.Title>Concepts Review Quiz</Card.Title>
								<Card.Text>
									This feature is currently under construction but will
									hopefully be coming soon to help students prepare for quizzes
									and thier case study projects.
								</Card.Text>
								<Card.Link href='#'>Card Link- TBD</Card.Link>
							</Card.Body>
						</Card>
					</div>
				</div>
			</body>
		</MainScreen>
	);
}

export default Dashboard;

//need to hard code in images and text- then use link to navigate to other page(s)-- about; excavation hist; artifacts
