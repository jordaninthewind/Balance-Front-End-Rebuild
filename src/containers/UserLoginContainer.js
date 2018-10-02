import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserSelect from '../components/UserSelect';
import { getAllUsers, setCurrentUser } from '../reducers/usersReducer';
import UserForm from '../components/UserForm';
import UserContainer from './UserContainer';

class UserLoginContainer extends Component {
	constructor(props) {
		super(props);

    	this.state = {
    	  userSelection: null,
    	  displayNewUser: false,
    	}
	}

  	componentDidMount() {
		this.props.getAllUsers();
    }

	handleUserSelect = (e) => {
		this.setState({ 
			userSelection: e.target.value,
		});

		const currentUser = this.props.users.filter(user => {
			return user.id.toString() === e.target.value;
		})
		this.props.setCurrentUser(currentUser[0]); // filter returns an array, so don't remove this index reference
	}

	removeNewUserForm = () => {
		this.setState({
			displayNewUser: false,
		})
	}

	showNewUserForm = () => {
		this.setState({
			displayNewUser: true,
		})
	}

	render() {
		if (!this.props.currentUser) {
		return (
			<div className="App-component">
				<h2>Find Balance!</h2>
			  	<div>Balance is a simple app to track your daily meditation, find inspiration through quotes and resources, and track progress.</div>
			  	<p>Select User to Track Progress</p>
			  	<div>Login or Sign Up</div>
			  	<UserForm />
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
  	  users: state.usersReducer.users,
  	  currentUser: state.usersReducer.currentUser,
  	}
}

const mapDispatchToProps = dispatch => {
	return { 
		getAllUsers: () => dispatch(getAllUsers()),
		setCurrentUser: (user) => dispatch(setCurrentUser(user))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLoginContainer);