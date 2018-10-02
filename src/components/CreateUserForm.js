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
			location: "",
			password: ""
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.removeForm();
		this.props.createUser(this.state.firstName, this.state.lastName, this.state.password, this.state.email, this.state.location, );
		this.setState({
			name: "",
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
					First Name: <input onChange={this.handleChange} name="firstName" value={this.state.firstName} /><br />
					Last Name: <input onChange={this.handleChange} name="lastName" value={this.state.lastName} />
					Password: <input onChange={this.handleChange} name="password" value={this.state.password} /> <br />
					Email: <input onChange={this.handleChange} name="email" value={this.state.email} />
					Location: <input onChange={this.handleChange} name="location" value={this.state.location} /><br />
					<button type="submit">Create User!</button>
				</form>
			</div>
		)
	}
};

const mapDispatchToProps = dispatch => {
	return {
		createUser: (firstName, lastName, password, email, location) => dispatch(createUser(firstName, lastName, password, email, location)),
	}
}

export default connect(null, mapDispatchToProps)(CreateUserForm);