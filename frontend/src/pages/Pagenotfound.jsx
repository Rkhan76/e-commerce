import React from 'react'
import Layout from '../commponents/layout/Layout'
import { Link } from 'react-router-dom'

const Pagenotfound = () => {
  return (
    <Layout
      title="404 - Page Not Found - Your E-commerce Website"
      description="The page you are looking for does not exist."
      keywords="404, page not found, ecommerce"
      author="Your Name"
    >
      <div className="flex flex-col justify-center bg-red-50 align-middle">
        <h1 className="text-3xl">404</h1>
        <h2 className="text-2xl">Oops ! Page Not Found</h2>
        <Link className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Go Back
        </Link>
      </div>
    </Layout>
  )
}

export default Pagenotfound
