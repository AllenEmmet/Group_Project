import React, { useState } from 'react'
import Dojo from './assets/Doj.png'
import { Link } from 'react-router-dom'

const Header = () => {
  
  return (
  <nav className="bg-sky-600 border-gray-200 rounded dark:bg-sky-600">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <Link to={'/'}  className="flex items-center p-0">
        <img src={Dojo} className="h-20 w-40 object-contain" alt="Exercise Tracker Logo" />
    </Link>
    <div class="hidden w-full md:block md:w-auto" id="navbar">
      <ul class="flex flex-col p-2 mt-4 bg-sky-600 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-sky-600 dark:border-sky-700">
        <li>
          <Link to={'/about'} class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
        </li>
        <li>
          <Link to={'/goals'} class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Your Goals</Link>
        </li>
        <li>
          <Link to={'/login'} class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</Link>
        </li>
        <li>
          <Link to={'/signup'} className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign Up</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header
