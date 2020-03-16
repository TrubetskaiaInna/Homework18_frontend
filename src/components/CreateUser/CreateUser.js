import React, { Component } from 'react'
import './CreateUser.scss'
import { apiService } from '../../servise/apiService'
import { NavLink } from 'react-router-dom'

class CreateUser extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      address: {
        city: '',
        street: ''
      }
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

  onSubmit = (e) => {
    const { firstName, lastName, email, address } = this.state
    e.preventDefault()
    apiService.createUser({ firstName, lastName, email, address }).then(res => console.log(res))
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
        <div className='wrapperLink'>
          <NavLink className='btn btn-outline-primary' to="/">
            Back to user list
          </NavLink>
        </div>
        <div className='wrapperForm'>
          <form onSubmit={this.onSubmit}>
            <legend>Create user</legend>
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
                name="email"
                className="form-control"
                type="text"
                value={this.state.email}
                onChange={this.handleInput}
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <div className="address">
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

export default CreateUser
