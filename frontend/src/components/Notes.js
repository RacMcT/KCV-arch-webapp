import React from "react";

//need to push todo/notes into mysql database (user_notes table) and then have it only visible when user is logged in
// same as how "dashboard" was originally set up?!-- also check on how worked for JS-411 homework!
// need to "componentify" this and pull out api calls once done for the mysql database

class Notes extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isClicked: false,
			notes: [],
			text: "",
		};
	}

	componentDidUpdate() {
		console.log(this.state.text);
	}

	onClickHandler = () => {
		this.setState({
			isClicked: true,
		});
		console.log(this.state.isClicked);

		this.setState({
			notes: [
				...this.state.notes,
				{ id: this.state.notes.length + 1, text: this.state.text },
			],
			isClicked: false,
			text: "",
		});
	};

	handleClick = (evt, id) => {
		console.log(id);
		const foundIndex = this.state.notes.findIndex((note) => note.id === id);
		const copy = [...this.state.notes];
		copy.splice(foundIndex, 1);
		this.setState({ notes: copy });
		console.log(foundIndex);
	};

	handleChange = (event) => {
		this.setState({
			text: event.target.value,
		});
	};

	render() {
		return (
			<div className='App'>
				<button onClick={this.onClickHandler}>Add Note</button>
				<input type='text' onChange={this.handleChange} />
				<div>
					<ul>
						{this.state.notes.map(({ text, id }) => {
							return (
								<li>
									<h3>{text}</h3>
									<button onClick={(evt) => this.handleClick(evt, id)}>
										Delete
									</button>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}

export default Notes;
