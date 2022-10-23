import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="grid h-screen place-items-center">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
          <p className="text-red-500 text-xs italic">Validations</p>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="*****" />
          <p className="text-red-500 text-xs italic">Validations</p>
        </div>

        {/* Right the Login button needs only go to the Home page as we have no functionality for it*/}
        <div className="flex items-center justify-between">
          <Link  to={'/'}className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Login
          </Link>
          <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot pswd? 
          </Link>
        </div>
      </form>

      {/* Comments for development section*/}
      <p className="text-center text-gray-500 text-xs">
        Initial login form,
        forgot Password has no functionality.
      </p>
    </div>
  )
}

export default Login;
