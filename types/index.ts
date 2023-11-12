export interface IDefaultResponse<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

export interface ICustomObject<T = string> {
  [key: string]: T
}

type TClass =
  | string
  | string[]
  | Record<string, boolean>
  | Record<string, boolean>[]

export type TClassName = TClass | TClass[]

export interface IParams {
  page?: number
  limit?: number
  offset?: number
  search?: string
  is_leader?: boolean
}

export interface IMenu {
  title: string
  slug: string
  children?: IMenu[]
}

export interface IStaticData {
  id: number
  title: string
  description: string
}
