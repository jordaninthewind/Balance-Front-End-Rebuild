import React, { Component } from 'react';
import { createUser } from '../reducers/usersReducer';
import { connect } from 'react-redux';

class CreateUserForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: "",
			lastName: "",
			password: "",
			email: "",
			location: "",
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createUser(this.state.firstName, this.state.lastName, this.state.email, this.state.password, this.state.location);
		this.setState({
			firstName: "",
			lastName: "",
			password: "",
			email: "",
			location: "",
		})
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	render() {
		return (
			<div>
				<form onSubmit={(e) => this.handleSubmit(e)} >
					First Name: <input onChange={this.handleChange} name="firstName" value={this.state.firstName} required /><br />
					Last Name: <input onChange={this.handleChange} name="lastName" value={this.state.lastName} required /> <br />
					Password: <input onChange={this.handleChange} name="password" type="password" value={this.state.password} required /> <br />
					Email: <input onChange={this.handleChange} name="email" type="email" value={this.state.email} required /> <br />
					Location: <input onChange={this.handleChange} name="location" value={this.state.location} required /><br />
					<button type="submit">Create User!</button>
				</form>
			</div>
		)
	}
};

const mapDispatchToProps = dispatch => {
	return {
		createUser: (firstName, lastName, email, password, location) => dispatch(createUser(firstName, lastName, email, password, location)),
	}
}

export default connect(null, mapDispatchToProps)(CreateUserForm);