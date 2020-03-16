import React, { Component } from 'react'
import TransitionsModal from '../DeleteUser/DeleteUser'

class User extends Component {
  render () {
    return (
      <>
        <div className='wrapperItemUser'>
          <div className='user'>
            <span> {this.props.user.firstName}</span>
            <span>{this.props.user.lastName}</span>
            <TransitionsModal
              user={this.props.user}
              updateData={this.props.updateData}/>
          </div>
        </div>
      </>
    )
  }
}

export default User
