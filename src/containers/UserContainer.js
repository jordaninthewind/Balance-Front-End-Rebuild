import React, { Component } from 'react';
import UserInfo from '../components/UserInfo'
import { connect } from 'react-redux';
import UpdateUserForm from '../components/UpdateUserForm'
import { deleteUser, updateUser, deleteCurrentUser } from '../reducers/usersReducer'

class UserContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			displayUpdateUser: false,
		}
	}

	displayUpdateUserForm = () => {
		this.setState({
			displayUpdateUser: true,
		})
	}

	render() {
		if (this.state.displayUpdateUser) {	
			return <UpdateUserForm currentUser={this.props.currentUser} updateUser={this.props.updateUser}/>
		} else {
			return (
				<div className='App-component'>
					<h2>Logged In As:</h2>
					{ this.props.currentUser && <UserInfo currentUserData={this.props.currentUser} /> }
					{ !this.props.currentUser && <h3>Please select a current user.</h3> }
					<br />
					{ this.props.currentUser && <button onClick={() => this.props.logOut()}>Log Out</button> }
					{ this.props.currentUser && <button onClick={this.displayUpdateUserForm}>Update User</button> }
				</div>
			)
		}
	}
}

const mapStateToProps = state => {
	return { 
		currentUser: state.usersReducer.currentUser,
		users: state.usersReducer.users,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		deleteUser: (user) => dispatch(deleteUser(user)),
		updateUser: (user) => dispatch(updateUser(user)),
		logOut: () => dispatch(deleteCurrentUser())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);

// { this.props.currentUser && <button onClick={() => { if (window.confirm("Click to confirm delete")) this.props.deleteUser(this.props.currentUser)}}>Delete User</button> }