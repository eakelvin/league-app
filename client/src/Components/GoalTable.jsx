import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EditStat from './EditStat';

const GoalTable = () => {
    const [stats, setStats] = useState([]);
    const [editingStat, setEditingStat] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/stats/get-stats')
      .then(response => {
        setStats(response.data);
      })
      .catch(error => {
        console.error('Error fetching stats:', error);
      });
  }, []);
    
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
                #
            </th>
            <th scope="col" className="px-6">
              Player
            </th>
            <th scope="col" className="px-6 py-3">
              Club
            </th>
            <th scope="col" className="px-6 py-3">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
        {stats.map((item, index) => (
            item.goal > 0 && (
            <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">{index + 1}</td>
              <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4">{item.team}</td>
              <td className="px-6 py-4">{item.goal}</td>
              {/* <button 
                onClick={() => handleEditClick(item)} 
                className='bg-blue-500 text-white p-3'>
                  Edit
              </button> */}
              <EditStat />
            </tr>
        )))}
          
          {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                   
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
            </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default GoalTable;
