import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { apiService } from '../../servise/apiService'
import {Error} from '../Error/Error'

class EditUser extends Component {

  constructor (props) {
    super(props)
    this.state = {
      firstName: this.props.location.user?.firstName,
      lastName: this.props.location.user?.lastName,
      email: this.props.location.user?.email,
      address: {
        city: this.props.location.user?.address.city,
        street: this.props.location.user?.address.street
      },
      showError: false
    }
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }

  handleAddress = ({ target: { name, value } }) => {
    const newState = { ...this.state.address, [name]: value }
    this.setState({ address: newState })
  }

  onSubmit = async (e) => {
    const { firstName, lastName, email, address } = this.state
    const { location } = this.props
    e.preventDefault()
    await apiService.editUser(location.user?._id, {
      firstName,
      lastName,
      email,
      address
    }).catch(() => {
      this.setState({ showError: true })
    })
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      address: {
        city: '',
        street: ''
      }
    })
  }

  render () {
    return (
      <>
        {this.state.showError ? <Error/> : null}
        <div className='wrapperLink'>
          <NavLink className='btn btn-outline-primary' to="/">
            Back to user list
          </NavLink>
        </div>
        <div className='wrapperForm'>
          <form onSubmit={this.onSubmit}>
            <legend>Edit user</legend>
            <div className="form-group">
              <label>First name</label>
              <input
                required
                name="firstName"
                className="form-control"
                type="text"
                value={this.state.firstName}
                onChange={this.handleInput}
                placeholder="Enter first name"
              />
            </div>
            <div className="form-group">
              <label>Last name</label>
              <input
                required
                name="lastName"
                className="form-control"
                type="text"
                value={this.state.lastName}
                onChange={this.handleInput}
                placeholder="Enter last name"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                required
                pattern='^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$'
                name="email"
                className="form-control"
                type="email"
                value={this.state.email}
                onChange={this.handleInput}
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <div className="address">
                <label>city</label>
                <input
                  required
                  name="city"
                  className="form-control"
                  type="text"
                  value={this.state.address.city}
                  onChange={this.handleAddress}
                  placeholder="Enter city"
                />
              </div>
              <div className="address">
                <label>street</label>
                <input
                  required
                  name="street"
                  className="form-control"
                  type="text"
                  value={this.state.address.street}
                  onChange={this.handleAddress}
                  placeholder="Enter street"
                />
              </div>
            </div>
            <div className='wrapperButton'>
              <button className='btn btn-outline-primary'>Confirm</button>
            </div>
          </form>
        </div>
      </>
    )
  }
}

export default EditUser
