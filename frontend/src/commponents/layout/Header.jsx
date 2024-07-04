import React from 'react'
import { NavLink, Link } from 'react-router-dom'


const Header = () => {
  return (
    <nav className="container shadow-md bg-white-700 flex justify-between p-3 font-Poppins text-lg">
      <NavLink className="flex gap-2 font-Roboto font-bold">
        🛒 Ecommerce App
      </NavLink>

      <div className="flex gap-5">
        <NavLink className={({ isActive }) =>
            isActive ? "font-light text-blue-600 border-b-2" : "font-light"
          } to="/">
          HOME
        </NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "font-light text-blue-600" : "font-light"
          }  to="/category">
          CATEGORY
        </NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "font-light text-blue-600" : "font-light"
          } to="/register">
          REGISTER
        </NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "font-light text-blue-600" : "font-light"
          } to="/login">
          LOGIN
        </NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "font-light text-blue-600" : "font-light"
          } to="/cart">
          CART(0)
        </NavLink>
      </div>
    </nav>
  )
}

export default Header
