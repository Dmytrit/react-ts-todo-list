export interface Todo {
  id: number
  title: string
  completed: boolean
}

// eslint-disable-next-line no-shadow
export enum TodoStatus {
  CURRENT = '/current',
  COMPLETED = '/completed',
}
