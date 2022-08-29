import membersApi from './Members'
import Axios from 'axios'

export const axios = Axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

const Api = {
  members: membersApi,
}

export default Api