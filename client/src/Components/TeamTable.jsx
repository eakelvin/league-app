import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TeamTable = () => {
    const [stats, setStats] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/stats')
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
            <th scope="col" className="px-6 py-3">
              Club
            </th>
            <th scope="col" className="px-6 py-3">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
            {stats.map((item) => (
                <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  {/* <td className="px-6 py-4">{item.team}</td> */}
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamTable;
