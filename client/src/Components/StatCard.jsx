import React, { useState } from 'react';
import GoalTable from './GoalTable';
import AssistTable from './AssistTable';
import TeamTable from './TeamTable';

const StatCard = () => {
  const [activeTab, setActiveTab] = useState('stats');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="">
        <label htmlFor="tabs" className="sr-only">
          Select tab
        </label>
        <select
          id="tabs"
          className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={activeTab}
          onChange={(e) => handleTabClick(e.target.value)}
        >
          <option value="stats">Goals</option>
          <option value="about">Assists</option>
          <option value="faq">TG</option>
        </select>
      </div>
      <ul
        className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse"
        role="tablist"
      >
        <li className="w-full">
          <button
            id="stats-tab"
            data-tabs-target="#stats"
            type="button"
            role="tab"
            aria-controls="stats"
            aria-selected={activeTab === 'stats'}
            className={`inline-block w-full p-4 rounded-ss-lg bg-gray-50 hover:bg-gray-100 focus:outline-none ${
              activeTab === 'stats' ? 'dark:bg-gray-700 dark:hover:bg-gray-600' : ''
            }`}
            onClick={() => handleTabClick('stats')}
          >
            Goals
          </button>
        </li>
        <li className="w-full">
          <button
            id="about-tab"
            data-tabs-target="#about"
            type="button"
            role="tab"
            aria-controls="about"
            aria-selected={activeTab === 'about'}
            className={`inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none ${
              activeTab === 'about' ? 'dark:bg-gray-700 dark:hover:bg-gray-600' : ''
            }`}
            onClick={() => handleTabClick('about')}
          >
            Assists
          </button>
        </li>
        <li className="w-full">
          <button
            id="faq-tab"
            data-tabs-target="#faq"
            type="button"
            role="tab"
            aria-controls="faq"
            aria-selected={activeTab === 'faq'}
            className={`inline-block w-full p-4 rounded-se-lg bg-gray-50 hover:bg-gray-100 focus:outline-none ${
              activeTab === 'faq' ? 'dark:bg-gray-700 dark:hover:bg-gray-600' : ''
            }`}
            onClick={() => handleTabClick('faq')}
          >
            TG
          </button>
        </li>
      </ul>
      <div id="fullWidthTabContent" className="border-t border-gray-200 dark:border-gray-600">
        
        <div
          className={`${
            activeTab === 'stats' ? '' : 'hidden'
          } p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800`}
          id="stats"
          role="tabpanel"
          aria-labelledby="stats-tab"
        >
          <GoalTable />
        </div>
        
        <div
          className={`${
            activeTab === 'about' ? '' : 'hidden'
          } p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800`}
          id="about"
          role="tabpanel"
          aria-labelledby="about-tab"
        >
          <AssistTable />
        </div>
        
        <div
          className={`${
            activeTab === 'faq' ? '' : 'hidden'
          } p-4 bg-white rounded-lg dark:bg-gray-800`}
          id="faq"
          role="tabpanel"
          aria-labelledby="faq-tab"
        >
          <TeamTable />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
