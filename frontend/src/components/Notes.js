import React from "react";

//need to push todo/notes into mysql database (user_notes table)
//need to also link DB tables by user_name so it can be pulled up on user login for thier personal notes
//renders onto dashboard, so only visible when user is logged in - done

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
