import React from 'react'

const Body = () => {
  return (
    <div>
         <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Manage your tournament/league</h2>
                <p className="mb-4">
                    EA-League brings you many amazing features. Managing your league or tourname has never been easier. Now you can quickly add teams and results and get your table online in seconds.
                </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                <img className="w-full rounded-lg" src="/girls.jpg" alt="Sports" />
                <img className="mt-4 w-full lg:mt-10 rounded-lg" src="./kid.jpg" alt="office content 2" />
                </div>
            </div>
        </section>
    </div>
  )
}


export default Body
