import React from 'react'
import Layout from '../commponents/layout/Layout'
import contactus from '../assets/images/contactus.jpeg'
import { BiMailSend, BiPhoneCall, BiSupport } from 'react-icons/bi'


const contact = () => {
  return (
    <Layout
      title="Contact Us - Your E-commerce Website"
      description="Get in touch with us for any queries or support."
      keywords="contact, support, customer service"
      author="Your Name"
    >
      <div className="flex items-center justify-center max-h-screen p-5">
        <div className="grid grid-cols-12 gap-4 max-w-6xl">
          <img
            className="col-span-6 w-full h-auto"
            src={contactus}
            alt="contactus"
          />
          <div className="col-span-6 flex flex-col justify-center p-4">
            <h1 className="text-3xl font-bold mb-4">CONTACT US</h1>
            <p className="text-lg mb-4">
              Any query and info about products, feel free to call anytime. We
              are available 24x7.
            </p>
            <div className="text-lg mb-2 flex items-center">
              <BiMailSend className="mr-2" /> :{' '}
              <a href="mailto:help@ecommerceapp.com" className="text-blue-500">
                help@ecommerceapp.com
              </a>
            </div>
            <div className="text-lg mb-2 flex items-center">
              <BiPhoneCall className="mr-2" /> :{' '}
              <a href="tel:012-3456789" className="text-blue-500">
                012-3456789
              </a>
            </div>
            <div className="text-lg mb-2 flex items-center">
              <BiSupport className="mr-2" /> :{' '}
              <a href="tel:1900-0000-0000" className="text-blue-500">
                1900-0000-0000 (toll free)
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
7
export default contact
