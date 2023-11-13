import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { AiOutlinePlus } from "react-icons/ai";
import ModalStat from '../Components/ModalStat';
import StatCard from '../Components/StatCard';

const Stats = () => {
  return (
    <div className='p-5'>
      <div>
        <h1 className='font-bold text-5xl'>Statistics</h1>
        <div className='flex justify-between'>
          <h1 className='mt-3 font-bold text-3xl'>(league name)Top Stats</h1>
          <ModalStat />
        </div>
      </div>
      <div className='mt-10'>
        <StatCard />
      </div>

    {/* <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        <div className="mt-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to='/goals'>
        <div className="flex flex-col items-center pb-5">
                <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="./ball.jpg"
                alt=""
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Goals</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">15</span>
        </div>
        </Link>
        </div>
    </div> */}

    </div>
  )
}

export default Stats
