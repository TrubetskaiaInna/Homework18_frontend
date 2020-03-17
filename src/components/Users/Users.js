import React, { Component } from 'react'
import { apiService } from '../../servise/apiService'
import User from '../User/User'
import './Users.scss'
import { NavLink } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import { Error } from '../Error/Error'

class Users extends Component {
  constructor (props) {
    super(props)
    this.state = {
      users: [],
      showSpinner: true,
      showError: false
    }
  }

  updateData = (value) => {
    this.setState({ users: value })
  }

  showError= () => {
    this.setState({ showError: !this.state.showError });
  }

  componentDidMount () {
    this.getUsers()
  }

  getUsers = () => {
    apiService.getUser().then(res => {
      this.setState({
        showSpinner: false,
        users: res.data
      })
    }).catch(() => {
      this.setState({
        showSpinner: false,
        showError: true
      })
    })
  }

  render () {
    return (
      <>
        {this.state.showError ? <Error/> : null}
        <div className='wrapper'>
          <div className='wrapperUser'>
            <h3>User list</h3>
            {this.state.showSpinner ? <Spinner/> :
              <>{
                this.state.users.map(user => {
                  return (
                    <User user={user}
                          key={user._id}
                          updateData={this.updateData}
                          showError={this.showError}
                    />
                  )
                })
              }</>
            }
            <div className='wrapperButton'>
              <NavLink className='btn btn-outline-primary' to="/create">
                Add User
              </NavLink>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Users
