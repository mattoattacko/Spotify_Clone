/* eslint-disable react/jsx-indent */
/* eslint-disable react/self-closing-comp */
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, i, isPlaying, activeSong, data }) => {

  const dispatch = useDispatch();

  // the way we figure out if the song is the currently active song and are we currently playing it is in the Discover component. This is where we handle the global state of if we are showing the player or not.
  const handlePauseClick = () => {
    dispatch(playPause(false));
  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  }
  
  return (
  <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
    <div className="relative w-full h-56 group">
      {/* need to figure out if the song we are currently showing is the song that is actively playing. If it's not, set to hidden */}
      <div 
        className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex 
        ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}
      >
        <PlayPause 
          song={song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
          isPlaying={isPlaying}
          activeSong={activeSong}
        />
      </div>

      <img src={song.images?.coverart} alt='song_img' />
    </div>

    <div className='mt-4 flex flex-col'>
      <p className="font-semibold text-lg text-white truncate"> 
        {/* 'truncate' above will shorten the title if the text is too long */}
        <Link to={`/songs/${song?.key}`}>
          {song.title}
        </Link>
      </p>      
      <p className="text-sm truncate text-gray-300 mt-1">
        {/* if song.artists exists, go to url and get the first artist. If it doesnt exist, point to top artists */}
        <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
          {song.subtitle}
        </Link>
      </p>

    </div>
  </div>
  );
};


export default SongCard;
