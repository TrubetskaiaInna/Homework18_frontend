import React, { Component } from 'react'
import TransitionsModal from '../DeleteUser/DeleteUser'
import { NavLink } from 'react-router-dom'

class User extends Component {
  render () {

    return (
      <>
        <div className='wrapperItemUser'>
          <NavLink className='user' to={{
            pathname: `/details/user/${this.props.user._id}`,
            userId: this.props.user._id
          }}>
            <span> {this.props.user.firstName}</span>
            <span>{this.props.user.lastName}</span>
          </NavLink>
          <TransitionsModal
            user={this.props.user}
            updateData={this.props.updateData}/>

        </div>
      </>
    )
  }
}

export default User
