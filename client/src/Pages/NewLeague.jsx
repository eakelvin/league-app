import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import ProductTable from '../Components/Table';
import CrudModal from '../Components/ModalForm';
import { Link } from 'react-router-dom';

const NewLeague = () => {
  return (
    <div>
      <Header />
      <div className='p-5'>
        <div className='mb-10'>
            <ProductTable />
        </div>

        <div className=''>
        <CrudModal />
        
        <Link to='/results'>
        <button
            type="button" 
            className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
            <AiOutlinePlus />
            Results
        </button>
        </Link>
    
        <Link to='/scores'>
        <button
            type="button" 
            className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
            <AiOutlinePlus />
            Scores
        </button>
        </Link>

        <Link to='/stats'>
        <button
            type="button" 
            className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
            <AiOutlinePlus />
            Stats
        </button>
        </Link>

        </div>
        

       </div>
      <Footer />
    </div>
  )
}

export default NewLeague
