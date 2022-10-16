/* eslint-disable */
import { useDispatch, useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { selectGenreListId } from '../redux/features/playerSlice';
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore';

// still need to add the functionality to send the right genre to our query and then to fetch the right songs. We need to use our <select>. We use <select> when we want to select a piece of state, but we useDispatch when we want to modify the state.  
// we want to dispatch an action to the store that says what specific genre we want to get. Then with a selector, we can select that modified state. We add the dispatch to the onChange event listener of our <select> element.
//redux toolkit saves the genres in cache so the loading is super quick

const Discover = () => {

  const dispatch = useDispatch();
  const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'POP');

  if(isFetching) return <Loader title='Loading songs...' />

  if(error) return <Error title='Error fetching songs' />

  //we destructure the value which is the genre Id, and then we check if the value is === to the genre list ID. We get the title once we find the one that matches.
  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  return (
    <div className="flex flex-col">
      <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
        <h2 className='font-bold text-3xl text-white text-left'>
          Discover { genreTitle }
        </h2>

        {/* Dropdown List */}
        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))} //select genre list is from player slice
          value={ genreListId || 'pop' }
          className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'
        >
          {genres.map((genre) => 
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          )}
        </select>        
      </div>

      {/* Songs Wrapper */}
      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {data?.map((song, i) => (
          <SongCard 
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>

    </div>
  );
};

export default Discover;
