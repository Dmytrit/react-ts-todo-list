import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Todo, TodoStatus } from '../../types/types'
import { TodoHeader } from '../TodosHeader/todo-header'
import { TodoList } from '../TodoList/todo-list'
import { Input } from '../../layout/fields/input'
import { Alert } from '../../layout/alert'
import {
  setDeleteAlert, setSuccessAlert, discardAlert,
} from '../../redux/alert-slice'
import { useAppDispatch, useAppSelector } from '../../helpers/redux-hooks'
import { RootState } from '../../store'

export const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [value, setValue] = useState('')
  const [visibleTodos, setVisibleTodos] = useState<Todo[]>([])
  const { pathname } = useLocation()
  const dispatch = useAppDispatch()
  const messages = useAppSelector((state: RootState) => state.alert.messages)

  useEffect(() => {
    if (pathname === TodoStatus.CURRENT) {
      setVisibleTodos(todos.filter((todo) => !todo.completed))
      return
    }
    if (pathname === TodoStatus.COMPLETED) {
      setVisibleTodos(todos.filter((todo) => todo.completed))
      return
    }
    setVisibleTodos(todos)
  }, [pathname, todos])

  const createNewTodo = (event: React.FormEvent): void => {
    event.preventDefault()

    if (!value) {
      return
    }

    const newTodo: Todo = {
      'id': Date.now(),
      'title': value,
      'completed': false,
    }

    setTodos((prevState) => [...prevState, newTodo])
    setValue('')
  }

  const onTodoDelete = (todoId: number): void => {
    const notDestroyedTodo = todos.filter((todo) => todo.id !== todoId)

    setTodos(notDestroyedTodo)
  }

  const onTodoEdit = (todoId: number, title: string): void => {
    const editedTodo = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          title,
        }
      }

      return todo
    })

    setTodos(editedTodo)
  }

  const activeTasks = visibleTodos.filter((el) => !el.completed).length

  const onTodoComplete = (todoId: number): void => {
    const completedTodo = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          'completed': !todo.completed,
        }
      }

      return todo
    })

    setTodos(completedTodo)
  }

  const onDeleteCompletedTodos = (): void => {
    const currentTodos = todos.filter((todo) => !todo.completed)

    setTodos(currentTodos)

    dispatch(setDeleteAlert('ToDos has been deleted'))
    setTimeout(() => {
      dispatch(discardAlert())
    }, 2000)
  }

  const handleTodoLoading = (): void => {
    dispatch(setSuccessAlert('ToDo has been successfully loaded'))

    setTimeout(() => {
      dispatch(discardAlert())
    }, 2000)
  }

  return (
    <div className="h-screen text-white
      bg-gradient-to-r from-[#1ea674] to-[#30b657]"
    >
      {messages && <Alert messages={messages} />}

      <div className='py-10 px-10 flex flex-col gap-4 text-lg'>
        <div
          className="w-full flex flex-col items-center justify-center gap-6"
        >
          <h1 className='self-start text-5xl'>ToDo list</h1>

          <form
            onSubmit={(event): void => {
              createNewTodo(event)
              handleTodoLoading()
            }}
            className=' relative w-full max-w-xl'
          >
            <Input
              type="text"
              value={value}
              label="Enter Task to do"
              placeholder="Enter Task to do"
              onChange={setValue}
            />
          </form>
        </div>

        <div className="w-full flex flex-col gap-4 items-center justify-center"
        >
          {todos.length > 0 &&
            <TodoHeader
              activeTasks={activeTasks}
              onDeleteCompletedTodos={onDeleteCompletedTodos}
            />
          }
          <TodoList
            visibleTodos={visibleTodos}
            onTodoComplete={onTodoComplete}
            onTodoDelete={onTodoDelete}
            onTodoEdit={onTodoEdit}
          />
        </div>
      </div>
    </div>
  )
}
