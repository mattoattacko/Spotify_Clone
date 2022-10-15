/* eslint-disable */
import { useState } from 'react';
import { useNavigate } from "react-router-dom"; //hook that lets us move to different pages
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => (
  <form 
    autoComplete='off'
    className='p-2 text-gray-400 focus-within:text-gray-600'
  >
    <label htmlFor="search-field" className="sr-only">
      Search Songs
    </label>
    <div className="flex flex-row justify-start items-center">
      <FiSearch className="h-5 w-5 ml-4" />
      <input 
        name="search-field"
        autoComplete="off"
        id="search-field"
        placeholder="Search"
        type="search"
        value=""
        onChange={() => {}}
        className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-white p-4"
      />
    </div>
  </form>
);

export default Searchbar;
