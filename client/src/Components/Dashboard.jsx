import React from 'react'
import Header from './Navbar'
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Dashboard = () => {
  return (
    <>
    <div className='p-5'>
      <div>
      <Link to='/newleague'> 
      <button
        type="button" 
        className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
          <AiOutlinePlus />
        New League
      </button>
      </Link>
      </div>

      <div>
        <h1>Display all leagues created below!</h1>
      </div>
    </div>
    </>
  )
}

export default Dashboard