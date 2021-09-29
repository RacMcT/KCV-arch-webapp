import React from "react";

//need to push todo/notes into mysql database (user_notes table) and then have it only visible when user is logged in
// same as how "dashboard" was originally set up?!-- also check on how worked for JS-411 homework!
// need to "componentify" this and pull out api calls once done for the mysql database

class Notes extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isClicked: false,
      input: "",
      items: [],
    };
  }

inputUpdate = (event) => {
  this.setState({ input: event.target.value });
  console.log(event.target.value);
};
formSubmit = (event) => {
  event.preventDefault();
  this.setState({
    items: [...this.state.items, this.state.input],
    input: "",
  });
  console.log("clicked")
};

componentDidUpdate() {
  console.log(this.state.input)
}

onClickHandler = () => {
  this.setState({
    isClicked: true
  })
  console.log(this.state.isClicked)

  this.setState({
    items: [...this.state.items, { id: this.state.items.length + 1, input: this.state.input }],
    isClicked: false,
    input: ""
  })
}

handleClick = (event, id) => {
  console.log(id)
  const foundIndex = this.state.items.findIndex(items => items.id === id)
  const copy = [...this.state.items]
  copy.splice(foundIndex, 1)
  this.setState({ items: copy })
  console.log(foundIndex)
}

handleChange = event => {
  this.setState({
    input: event.target.value
  })
}

render() {
  return (
    <div className="App">
      <h1>Here are my notes!</h1>
      <p>Add some short notes to help you review the information</p>
      <form onSubmit={this.formSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.inputUpdate}>
          </input>

          <button onClick={this.formSubmit}>
            Add Note
          </button>

          {this.state.items.map(({ input, id }) => {
              return (

          <button onClick={event => this.handleClick(event, id)}>
            Delete Note
          </button>
          )})
            }
        </form>

        <ul>
          {this.state.items.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        {console.log(this.state.items)}
      </div>
    );
  }
}


export default Notes;