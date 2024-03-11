/* eslint-disable complexity */
import classNames from 'classnames'
import React, { useRef, useState } from 'react'
import { Todo } from '../../../types/types'

interface Props {
  todo: Todo
  onTodoComplete: (todoId: number) => void
  onTodoDelete: (todoId: number) => void
  onTodoEdit: (todoId: number, title: string) => void
}

export const TodoItem: React.FC<Props> = (props: Props) => {
  const { todo, onTodoComplete, onTodoDelete, onTodoEdit } = props
  const [title, setTitleValue] = useState(todo.title)

  const onEdit = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      setTitleValue(event.currentTarget.value)
      onTodoEdit(todo.id, title)
      event.currentTarget.blur()

      if (!event.currentTarget.value) {
        onTodoDelete(todo.id)
      }
    }

    if (event.key === 'Escape') {
      setTitleValue(todo.title)
    }
  }

  const onBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    if (event.target.value) {
      setTitleValue(event.target.value)
      onTodoEdit(todo.id, title)
    } else {
      onTodoDelete(todo.id)
    }
  }

  const [inputFocused, setInputFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <li
      key={todo.id}
      className={classNames(
        inputFocused && 'bg-theme-smoke',
        todo.completed && ' cursor-default',
        // eslint-disable-next-line max-len
        'relative min-h-10 pl-2 rounded-sm flex items-center overflow-hidden border border-theme-smoke hover:bg-theme-smoke',
      )}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          className="
            mr-2 w-4 h-4 rounded-sm
            ring-2 ring-inset ring-theme-primary
          "
          onClick={(): void => onTodoComplete(todo.id)}
          defaultChecked={todo.completed}
        />
      </div>

      <div className="relative z-10 group flex items-center">
        <label
          onClick={():void => {
            if (!todo.completed) {
              setInputFocused(true)
              inputRef?.current?.focus()
            }
          }}
          className={classNames(
            inputFocused ? ' hidden' : 'text-theme-primary cursor-text',
            todo.completed && 'cursor-default',
          )}
        >
          {todo.title}
        </label>
        <div
          className={classNames(
            // eslint-disable-next-line max-len
            todo.completed ? 'w-full transition-all duration-500 ease-in-out' : 'w-0',
            // eslint-disable-next-line max-len
            'absolute bottom-3 left-0 h-0.5 bg-theme-primary transition-all duration-500 ease-in-out',
          )}>
        </div>
      </div>

      <input
        type="text"
        maxLength={29}
        className={classNames(
          // eslint-disable-next-line max-len
          inputFocused ? 'edit ml-2 bg-transparent cursor-text text-theme-primary rounded-sm ring-0 border-none outline-none' : ' opacity-0',
          'absolute top-[5px] left-6 w-full max-w-[486px]',
        )}
        value={title}
        disabled={todo.completed}
        onChange={(event): void => setTitleValue(event.target.value)}
        onKeyDown={onEdit}
        onFocus={(): void => setInputFocused(true)}
        onBlur={(event): void => {
          onBlur(event)
          setInputFocused(false)
        }}
        ref={inputRef}
      />
    </li>
  )
}
