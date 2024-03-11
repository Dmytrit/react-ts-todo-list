import React from 'react'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

export const TodosFilter: React.FC = () => {
  return (
    <ul className="
      flex flex-col items-start
      sm:flex-row sm:items-center sm:gap-5
    ">
      <li className="relative z-10 px-2 sm:p-2 group cursor-pointer">
        <div className="
          absolute top-0 left-0 -z-10 w-full h-full bg-gradient-to-r
          from-neutral-950/10 via-neutral-500/10 to-neutral-50/10
          scale-x-0 shadow-md shadow-green-800 transition-transform
          ease-in-out origin-right duration-500
          group-hover:scale-x-100 group-hover:origin-left">
        </div>
        <NavLink
          to="/"
          className={({ isActive }): string => classNames(
            isActive ? 'selected' : '',
            'sm:p-2',
          )}
        >
          All
        </NavLink>
      </li>

      <li className="relative z-10 px-2 sm:p-2 group cursor-pointer">
        <div className="
          absolute top-0 left-0 -z-10 w-full h-full bg-gradient-to-r
          from-neutral-950/10 via-neutral-500/10 to-neutral-50/10
          scale-x-0 shadow-md shadow-green-800 transition-transform
          ease-in-out origin-right duration-500
          group-hover:scale-x-100 group-hover:origin-left">
        </div>
        <NavLink
          to="/current"
          className={({ isActive }): string => classNames(
            isActive ? 'selected' : '',
            'sm:p-2',
          )}
        >
          Current
        </NavLink>
      </li>

      <li className="relative z-10 px-2 sm:p-2 group cursor-pointer">
        <div className="
          absolute top-0 left-0 -z-10 w-full h-full bg-gradient-to-r
          from-neutral-950/10 via-neutral-500/10 to-neutral-50/10
          scale-x-0 shadow-md shadow-green-800 transition-transform
          ease-in-out origin-right duration-500
          group-hover:scale-x-100 group-hover:origin-left">
        </div>
        <NavLink
          to="/completed"
          className={({ isActive }): string => classNames(
            isActive ? 'selected' : '',
            'sm:p-2',
          )}
        >
          Completed
        </NavLink>
      </li>
    </ul>
  )
}
