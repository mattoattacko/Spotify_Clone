/* eslint-disable */
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; //needed so we can get the URL
import { Error, Loader, SongCard } from '../components';
import { useGetSongsBySearchQuery } from '../redux/services/shazamCore';

const Search = () => {

  //get search term from URL
  const { searchTerm } = useParams();

  const { activeSong, isPlaying } = useSelector((state) => state.player); //pulls data from state
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);

  const songs = data?.tracks?.hits?.map((song) => song.track); //we get a song and return a song track for each song

  if(isFetching) return <Loader title="Loading Top Charts" />;

  // if the country exists and its not an empty string
  if(error && country) return <Error title="Error getting top charts" />;

  //to fetch the songs around us we need to know where we are located. We recall it whenever the country changes.
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Showing results for <span className="font-black">{searchTerm}</span>
      </h2>

      {/* wrapper for the songs */}
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map((song, i) => (
          <SongCard 
            key={song.key}
            song={song} //the song info
            activeSong={activeSong}
            isPlaying={isPlaying}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  )  
}



export default Search;
