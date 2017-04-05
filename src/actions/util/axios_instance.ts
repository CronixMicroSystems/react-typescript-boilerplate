import axios from 'axios'
// import store from '../../store'
import { fnNetworkActive } from '../../actions/index'

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8080/'

export function getAxios (dispatch, name, text) {
  dispatch(fnNetworkActive(name, text))

  return axios.create({
    baseURL: BACKEND_URL,
    responseType: 'json',
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('token')}`
    }
  })
}

