import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 p-4 text-center text-slate-50 sticky top-full p-6">
      <h1 className="text-2xl">All Right Reserved &copy; Techinfoyt</h1>
      <div>
        <Link
          className="text-white hover:text-blue-500 hover:underline"
          to="/about"
        >
          About
        </Link>
        {' | '}
        <Link
          className="text-white hover:text-blue-500 hover:underline"
          to="/contact"
        >
          Contact
        </Link>
        {' | '}
        <Link
          className="text-white hover:text-blue-500 hover:underline"
          to="/policy"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}

export default Footer
