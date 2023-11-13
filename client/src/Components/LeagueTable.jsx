import React, { useEffect, useState } from 'react';
import axios from 'axios'

const LeagueTable = () => {
    const [currentDateTime, setCurrentDateTime] = useState('');
    const [league, setLeague] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/league')
    .then(response => {
      setLeague(response.data)
    })
    .catch(error => {
      console.error('Error fetching stats:', error)
    })
  }, [])
  

  useEffect(() => {
    const getCurrentDateTime = () => {
      const now = new Date();
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short',
      };

      return now.toLocaleString('en-US', options);
    };

    setCurrentDateTime(getCurrentDateTime());
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="mb-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
                League created on: {currentDateTime}
            </p>
        </div>
      <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
        <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
          <tr>
          <th scope="col" className="py-3 bg-blue-500">
               Team
             </th>
             <th scope="col" className="py-3">
               G
             </th>
             <th scope="col" className="py-3 bg-blue-500">
               W-D-L
             </th>
             <th scope="col" className="py-3">
               +
             </th>
             <th scope="col" className="py-3 bg-blue-500">
               -
             </th>
             <th scope="col" className="py-3">
               +-
             </th>
             <th scope="col" className="py-3 bg-blue-500">
               P
             </th>
          </tr>
        </thead>
        <tbody>
        {league.map((item) => (
            <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">{item.team}</td>
              <td className="px-6 py-4">{item.games}</td>
              <td className="px-6 py-4">{item.win} : {item.draw} : {item.loss}</td>
              <td className="px-6 py-4">{item.plus}</td>
              <td className="px-6 py-4">{item.minus}</td>
              <td className="px-6 py-4">{item.points}</td>
            </tr>
        ))}
          {/* <tr className="bg-blue-600 border-b border-blue-400">
            <th scope="row" className="font-medium bg-blue-500 text-blue-50 whitespace-nowrap dark:text-blue-100">
              Apple MacBook Pro 17"
            </th>
            <td className="py-4">
              Silver
            </td>
            <td className="py-4 bg-blue-500">
              Laptop
            </td>
            <td className="py-4">
              $2999
            </td>
            <td className="py-4 bg-blue-500">
              $2999
            </td>
            <td className="py-4">
              $2999
            </td>
            <td className="py-4">
              $2999
            </td>
          </tr> */}

        </tbody>
      </table>
    </div>
  );
};

export default LeagueTable;

// import React from 'react';

// const ProductTable = () => {
//   return (
//     <div className="relative overflow-x-auto">
//       <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead className="text-xs text-white uppercase bg-gray-800">
//           <tr>
//            
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
//             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//               Apple MacBook Pro 17"
//             </th>
           
//           </tr>
//           <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
//             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//               Microsoft Surface Pro
//             </th>
//             <td className="py-4">
//               White
//             </td>
//             <td className="py-4">
//               Laptop PC
//             </td>
//             <td className="py-4">
//               $1999
//             </td>
//             <td className="py-4">
//               $1999
//             </td>
//             <td className="py-4">
//               $1999
//             </td>
//             <td className="py-4">
//               $1999
//             </td>
//           </tr>
//           <tr className="bg-white dark:bg-gray-800">
//             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//               Magic Mouse 2
//             </th>
//             <td className="py-4">
//               Black
//             </td>
//             <td className="py-4">
//               Accessories
//             </td>
//             <td className="py-4">
//               $99
//             </td>
//             <td className="py-4">
//               $99
//             </td>
//             <td className="py-4">
//               $99
//             </td>
//             <td className="py-4">
//               $99
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ProductTable;
