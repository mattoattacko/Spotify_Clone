/* eslint-disable */
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopCharts = () => {

  const { activeSong, isPlaying } = useSelector((state) => state.player); //pulls data from state
  const { data, isFetching, error } = useGetTopChartsQuery();

  if(isFetching) return <Loader title="Loading Top Charts" />;

  // if the country exists and its not an empty string
  if(error && country) return <Error title="Error getting top charts" />;

  //to fetch the songs around us we need to know where we are located. We recall it whenever the country changes.
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Discover Top Charts
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



export default TopCharts;
