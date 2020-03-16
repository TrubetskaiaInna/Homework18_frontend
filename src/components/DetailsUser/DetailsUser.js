import React, { Component } from 'react'
import { apiService } from '../../servise/apiService'
import { NavLink } from 'react-router-dom'
import './DetailsUser.scss'

class DetailsUser extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: []
    }
  }

  componentDidMount () {
    apiService.detailsUser(this.props.location.userId)
      .then((res) => {
          this.setState({ user: res.data })
        }
      )
  }

  render () {
    return (
      <>
        <div className='wrapperLink'>
          <NavLink className='btn btn-outline-primary' to="/">
            Back to user list
          </NavLink>
        </div>
        <div className='wrapperDetails'>
          <h3>Details user</h3>
          <div className='wrapperInfo'>
            <div className='titleInfo'>First name:</div>
            <div className='info'>{this.state.user.firstName}</div>
          </div>
          <div className='wrapperInfo'>
            <div className='titleInfo'>Last name:</div>
            <div className='info'>{this.state.user.lastName}</div>
          </div>
          <div className='wrapperInfo'>
            <div className='titleInfo'>Email:</div>
            <div className='info'> {this.state.user.email}</div>
          </div>
          <div className='wrapperInfo'>
            <div className='titleInfo'>Address:</div>
            <div className='infoAddress'>
              <div className='infoA'>
                <div className='titleInfo'> City:</div>
                {this.state.user.address?.city}</div>
              <div className='infoA'>
                <div className='titleInfo'>Street:</div>
                {this.state.user.address?.street}</div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default DetailsUser
