/* eslint-disable */

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';

const AroundYou = () => {

  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player); //pulls data from state

  console.log(country)

  // using geo.ipify api to get country
  useEffect(() => {
    axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_ymw43KFIQBNqnyECR4EZ47WKipNxq`)
      .then((res) => setCountry(res?.data?.location?.country))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [country]);

  //to fetch the songs around us we need to know where we are located. We recall it whenever the country changes.
  return (
    <div>

    </div>
  )  
}



export default AroundYou;
