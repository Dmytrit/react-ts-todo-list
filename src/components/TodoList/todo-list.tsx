import React from 'react'
import { Todo } from '../../types/types'
import { TodoItem } from './TodoItem/todo-item'

interface Props {
  visibleTodos: Todo[]
  onTodoComplete: (todoId: number) => void
  onTodoDelete: (todoId: number) => void
  onTodoEdit: (todoId: number, title: string) => void
}

export const TodoList: React.FC<Props> = (props: Props) => {
  const { visibleTodos, onTodoComplete, onTodoDelete, onTodoEdit } = props

  return (
    <ul className="
      w-full max-w-xl bg-white rounded-sm"
    >
      {visibleTodos.map((todo) => <TodoItem
        key={todo.id}
        todo={todo}
        onTodoComplete={onTodoComplete}
        onTodoDelete={onTodoDelete}
        onTodoEdit={onTodoEdit}
      />)}
    </ul>
  )
}
