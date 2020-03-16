import React, { Component } from 'react'
import { apiService } from '../../servise/apiService'
import User from '../User/User'
import './Users.scss'

class Users extends Component {
  constructor (props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount () {
    apiService.getUser().then(res => {
      this.setState({
        users: res.data
      })
      console.log(this.state.users)
    })
  }

  render () {
    return (
      <div className='wrapper'>
        <div className='wrapperUser'>
          <h3>User list</h3>
        {
          this.state.users.map(user => {
            return (
              <User user={user}
                    key={user._id}
              />
            )
          })
        }
      </div>
      </div>
    )
  }
}

export default Users
