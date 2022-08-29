export interface MembersRow  {
  title: string
  location:string
  name:string
  date: string
  id:number
}

export interface CreateMember {
  title: string
  location: string
  name: string
  date: string
}

export type FilterType = 'all' | 'past14'