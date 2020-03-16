import React, { Component } from 'react'

class User extends Component {
  render () {
    return (
      <>
        <div className='wrapperItemUser'>
          <div className='user'>
            <span> {this.props.user.firstName}</span>
            <span>{this.props.user.lastName}</span>
          </div>
        </div>
      </>
    )
  }
}

export default User
