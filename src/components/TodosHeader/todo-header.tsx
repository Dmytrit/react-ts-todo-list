import { MouseEventHandler, ReactElement } from 'react'
import { TodosFilter } from './todos-filter'

interface Props {
  activeTasks: number
  onDeleteCompletedTodos: MouseEventHandler<HTMLButtonElement>
}

export function TodoHeader(props: Props): ReactElement {
  const { activeTasks, onDeleteCompletedTodos } = props
  return (
    <div
      className="
      w-full px-2 py-4 max-w-xl
      flex flex-col items-start justify-between
      sm:flex-row sm:items-center
      border rounded-sm
      "
    >
      <span className="ml-2 sm:ml-0">
        {`${activeTasks} active tasks`}
      </span>

      <TodosFilter />

      <button
        type="button"
        className="relative px-2 sm:p-2 group"
        onClick={onDeleteCompletedTodos}
      >
        <div className="
          absolute top-0 left-0 w-full h-full bg-gradient-to-r
          from-neutral-950/10 via-neutral-500/10 to-neutral-50/10
          scale-x-0 shadow-md shadow-green-800 transition-transform
          ease-in-out origin-right duration-500
          group-hover:scale-x-100 group-hover:origin-left">
        </div>
        Delete task
      </button>
    </div>
  )
}
