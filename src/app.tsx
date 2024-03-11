import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { TodoPage } from './components/TodoApp/todo-page'

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<TodoPage />} />
        <Route path="current" element={<TodoPage />} />
        <Route path="completed" element={<TodoPage />} />
      </Route>
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  )
}
