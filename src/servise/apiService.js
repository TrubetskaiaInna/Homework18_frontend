import axios from 'axios'
import { API_HOST } from '../config/index'

export class apiService {
  static getUser () {
    return axios.get(`${API_HOST}users`)
      .catch(error => {
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else {
          console.log('Strange Error', error.message)
        }
        console.log(error.config)
      })
  }

  static createUser (currentUser) {
    return axios.post(`${API_HOST}user`, {
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      email: currentUser.email,
      address: currentUser.address
    })
  }

  static deleteUser (id) {
    return axios.delete(`${API_HOST}user/${id}`)
  }

  static detailsUser (id) {
    return axios.get(`${API_HOST}user/${id}`)
      .catch(error => {
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else {
          console.log('Strange Error', error.message)
        }
        console.log(error.config)
      })
  }

  static editUser (id, currentUser) {
    return axios.put(`${API_HOST}user/${id}`, {
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      email: currentUser.email,
      address: currentUser.address
    })
  }
}
