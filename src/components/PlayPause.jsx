import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => ( 
  (isPlaying && activeSong?.title === song.title) ? (
    <FaPauseCircle 
      size={35}
      className="text-gray-300"
      onClick={handlePause}
    />
  ) : (
    <FaPlayCircle 
      size={35}
      className="text-gray-300"
      onClick={handlePlay}
    />
  )

  // if we are playing, and the active song title is = to the current list song title that means we are currently playing it and we should show a pause icon. Else show a play icon.
);

export default PlayPause;
