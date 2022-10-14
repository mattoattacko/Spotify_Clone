/* eslint-disable */
import { Error, Loader, ArtistCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopArtists = () => {

  const { data, isFetching, error } = useGetTopChartsQuery();

  if(isFetching) return <Loader title="Loading Top Artists" />;

  // if the country exists and its not an empty string
  if(error && country) return <Error title="Error getting top artists" />;

  //to fetch the songs around us we need to know where we are located. We recall it whenever the country changes.
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Top Artists
      </h2>

      {/* wrapper for the songs */}
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((track) => (
          <ArtistCard 
            key={track.key}
            track={track}            
          />
        ))}
      </div>
    </div>
  )  
}



export default TopArtists;
