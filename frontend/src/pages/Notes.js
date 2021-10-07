// same as a ToDo App, but instead a short bulleted list for student notes
// needs to be CRUD functionality
// needs to connect to database
// can only be accessable if user is registered or logged in
// other pages are open without registering on the website - "bonus feature offered"

import React from "react";
import Notes from "../components/Notes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function NotesPage() {
	return (
		<body class='d-flex flex-column min-vh-100'>
			<div class='wrapper flex-grow-1'>
				<h1>
					{" "}
					Notes for you to review website content before exams and quizzes!
				</h1>
				<Notes />
				<Footer />
			</div>
		</body>
	);
}

export default NotesPage;
