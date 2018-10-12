import React, { Component } from 'react';

class UpdateUserForm extends Component {
	constructor(props) {
		super(props);

		this.state = {	// add props.currentUser as only state to maintain via embedded object to simplify flow
			// name: props.currentUser.name,
			// lastName: props.currentUser.lastName,
			// // password: "",
			// email: props.currentUser.email,
			// location: props.currentUser.location,
			// profile_url: props.currentUser.profile_url,
			currentUser: props.currentUser
		}
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.updateUser(this.state.currentUser);
	}

	handleChange = e => {
    	let inputName = e.target.name;
    	let inputValue = e.target.value;

    	let statusCopy = Object.assign({}, this.state);
    	statusCopy.currentUser[inputName] = inputValue;

    	this.setState(statusCopy);
	}

	render() {
		return (
			<div className="App-component">
				<p>Update User</p>
				<form onSubmit={ e => this.handleSubmit(e) } >
					First Name: <input onChange={this.handleChange} name="name" value={this.state.currentUser.name} required /><br />
					Last Name: <input onChange={this.handleChange} name="last_name" value={this.state.currentUser.last_name} required /> <br />
					Password: <input onChange={this.handleChange} name="password" value={this.state.currentUser.password} required /> <br />
					Email: <input onChange={this.handleChange} name="email" type="email" value={this.state.currentUser.email} required /> <br />
					Location: <input onChange={this.handleChange} name="location" value={this.state.currentUser.location} required /><br />
					Image Link: <input onChange={this.handleChange} name="profile_url" value={this.state.currentUser.profile_url} required /><br />
					<div>-- Image Should Be Square --</div>
					<button type="submit">Update User</button>
				</form>
			</div>
		)
	}
};

export default UpdateUserForm;