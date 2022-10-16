/* eslint-disable */
import { useState } from 'react';
import { useNavigate } from "react-router-dom"; //hook that lets us move to different pages
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
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
        value={searchTerm} //this is where we modify the search term
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-white p-4"
      />
    </div>
  </form>
  )

};

export default Searchbar;
