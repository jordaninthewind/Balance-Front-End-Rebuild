import React, { Component } from 'react';
import { loginUser } from '../reducers/usersReducer';
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
		this.props.loginUser(this.state.name, this.state.location);
		this.setState({
			email: "",
			password: "",
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
					E-mail: <input onChange={this.handleChange} name="email" type="email" value={this.state.email} required /><br />
					Password: <input onChange={this.handleChange} name="password" type="password" value={this.state.password} required /><br />
					<button type="submit">Log In!</button>
				</form>
			</div>
		)
	}
};

const mapDispatchToProps = dispatch => {
	return {
		loginUser: (email, password) => dispatch(loginUser(email, password)),
	}
}

export default connect(null, mapDispatchToProps)(LoginUserForm);