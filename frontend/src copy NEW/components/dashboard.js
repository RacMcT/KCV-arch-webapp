import * as React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Card from "react-bootstrap/Card";

function Dashboard() {
	return (
		<body class='d-flex flex-column min-vh-100'>
			<div class='wrapper flex-grow-1'>
				<Row xs={1} md={2} className='g-4'>
					<Col>
						<Card>
							<Card.Img variant='top' src='holder.js/100px160' />
							<Card.Body>
								<Card.Title>About Archaeology</Card.Title>
								<Card.Text>
									This is a longer card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
								</Card.Text>
								<Card.Link href='#'>Card Link</Card.Link>
							</Card.Body>
						</Card>
						<Card>
							<Card.Img variant='top' src='holder.js/100px160' />
							<Card.Body>
								<Card.Title>Excavation History</Card.Title>
								<Card.Text>
									This is a longer card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
								</Card.Text>
								<Card.Link href='#'>Card Link</Card.Link>
							</Card.Body>
						</Card>
						<Card>
							<Card.Img variant='top' src='holder.js/100px160' />
							<Card.Body>
								<Card.Title>Technology</Card.Title>
								<Card.Text>
									This is a longer card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
								</Card.Text>
								<Card.Link href='#'>Card Link</Card.Link>
							</Card.Body>
						</Card>
						<Card>
							<Card.Img variant='top' src='holder.js/100px160' />
							<Card.Body>
								<Card.Title>Artifact Gallery</Card.Title>
								<Card.Text>
									This is a longer card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
								</Card.Text>
								<Card.Link href='#'>Card Link</Card.Link>
							</Card.Body>
						</Card>
						<Card>
							<Card.Img variant='top' src='holder.js/100px160' />
							<Card.Body>
								<Card.Title>Ongoing Research</Card.Title>
								<Card.Text>
									This is a longer card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
								</Card.Text>
								<Card.Link href='#'>Card Link</Card.Link>
							</Card.Body>
						</Card>
						<Card>
							<Card.Img variant='top' src='holder.js/100px160' />
							<Card.Body>
								<Card.Title>Review Quiz??</Card.Title>
								<Card.Text>
									This is a longer card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
								</Card.Text>
								<Card.Link href='#'>Card Link</Card.Link>
							</Card.Body>
						</Card>
					</Col>
					)
				</Row>
			</div>
		</body>
	);
}

export default Dashboard;

//need to hard code in images and text- then use link to navigate to other page(s)-- about; excavation hist; artifacts
