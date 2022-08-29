import {axios} from '../index'
import {MembersRow, CreateMember} from './types'

export default {
  async getAll(): Promise<Record<'results',Array<MembersRow>>> {
    const response = await axios.get(`/meetings`)
    return response.data
  },

  async create(data: CreateMember): Promise<MembersRow> {
    const response = await axios.post(`/meeting`, data)
    return response.data as MembersRow
  },
}