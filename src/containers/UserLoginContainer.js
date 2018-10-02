import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from '../reducers/usersReducer';
import LoginUserForm from '../components/LoginUserForm';
import CreateUserForm from '../components/CreateUserForm';
import UserContainer from './UserContainer';

class UserLoginContainer extends Component {
	constructor(props) {
		super(props);

    	this.state = {
    	  displayCreateUser: false,
    	  displayLoginUser: false
    	}
	}

  	// componentDidMount() {
		// this.props.getAllUsers();
    // }

	handleUserSelect = (e) => {
		this.setState({ 
			userSelection: e.target.value,
		});

		const currentUser = this.props.users.filter(user => {
			return user.id.toString() === e.target.value;
		})
		this.props.setCurrentUser(currentUser[0]); // filter returns an array, so don't remove this index reference
	}

	removeUserForm = () => {
		this.setState({
			displayCreateUser: false,
			displayLoginUser: false
		})
	}

	displayCreateUserForm = () => {
		this.setState({
			displayCreateUser: true,
			displayLoginUser: false
		})
	}

	displayLoginUserForm = () => {
		this.setState({
			displayLoginUser: true,
			displayCreateUser: false
		})
	}

	render() {
		if (!this.props.currentUser) {
		return (
			<div className="App-component">
				<h2>Find Balance!</h2>
			  	<div>Balance is a simple app to track your daily meditation, find inspiration through quotes and resources, and track progress.</div>
			  	<br />
				<button onClick={this.displayLoginUserForm}>Login</button>  <button onClick={this.displayCreateUserForm}>Sign Up</button>
				<br /><br />
			  	{ this.state.displayLoginUser && <LoginUserForm /> }
			  	{ this.state.displayCreateUser && <CreateUserForm /> }
			</div>
		); } else {
			return (
				<div>
					<br /><br />
					<img src="shambhala sun.png" className="responsiveImage" alt="" />
					<UserContainer />
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
  return { 
  	  currentUser: state.usersReducer.currentUser,
  	}
}

const mapDispatchToProps = dispatch => {
	return {
		setCurrentUser: (user) => dispatch(setCurrentUser(user))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLoginContainer);