import React, { Component } from 'react';
import { createUser } from '../reducers/usersReducer';
import { connect } from 'react-redux';

class LoginUserForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: ""
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		// this.props.removeForm();
		this.props.LoginUser(this.state.name, this.state.location);
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
				<h2>Log In to Track Progress</h2>
				<form onSubmit={(e) => this.handleSubmit(e)} >
					E-mail: <input onChange={this.handleChange} name="email" value={this.state.email} /><br />
					Password: <input onChange={this.handleChange} name="password" value={this.state.password} /><br />
					<button type="submit">Log In!</button>
				</form>
			</div>
		)
	}
};

const mapDispatchToProps = dispatch => {
	return {
		LoginUser: (email, password) => dispatch(LoginUser(email, password)),
	}
}

export default connect(null, mapDispatchToProps)(LoginUserForm);