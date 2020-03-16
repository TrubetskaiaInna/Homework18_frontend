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
}