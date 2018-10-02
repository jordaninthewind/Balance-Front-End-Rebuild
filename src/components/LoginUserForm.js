import React, { Component } from 'react';
import { createUser } from '../reducers/usersReducer';
import { connect } from 'react-redux';

class LoginUserForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			password: ""
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.removeForm();
		this.props.createUser(this.state.name, this.state.location);
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
					Username: <input onChange={this.handleChange} name="name" value={this.state.name} /><br />
					Password: <input onChange={this.handleChange} name="location" value={this.state.location} /><br />
					<button type="submit">Create User!</button>
				</form>
			</div>
		)
	}
};

const mapDispatchToProps = dispatch => {
	return {
		createUser: (name, location) => dispatch(createUser(name, location)),
	}
}

export default connect(null, mapDispatchToProps)(LoginUserForm);