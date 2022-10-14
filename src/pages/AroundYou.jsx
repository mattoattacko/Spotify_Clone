/* eslint-disable */

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';

const AroundYou = () => {

  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player); //pulls data from state
  const { data, isFetching, error } = useGetSongsByCountryQuery(country);

  console.log(country)

  // using geo.ipify api to get country
  useEffect(() => {
    axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_ymw43KFIQBNqnyECR4EZ47WKipNxq`)
      .then((res) => setCountry(res?.data?.location?.country))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [country]);

  if(isFetching && loading) return <Loader title="Loading popular songs in your area" />;

  // if the country exists and its not an empty string
  if(error && country) return <Error title="Error getting songs in your area" />;

  //to fetch the songs around us we need to know where we are located. We recall it whenever the country changes.
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Popular in the <span className="font-black">
          {country}
        </span>
      </h2>

      {/* wrapper for the songs */}
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard 
            key={song.key}
            song={song} //the song info
            activeSong={activeSong}
            isPlaying={isPlaying}
            data={data}
          />
        ))}
      </div>
    </div>
  )  
}



export default AroundYou;
