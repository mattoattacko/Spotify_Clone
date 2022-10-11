/* eslint-disable */

import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams(); // 'songid' is coming from our Routes in App. Getting the 'songid' will allow us to make an API call to get more details about a specific song.
  const { activeSong, isPlaying } = useSelector((state) => state.player); //pulls data from state


  return (
    <div className='flex flex-col'> 
      {/* <DetailsHeader 
        artistId={artistId}
        songData={songData}
      /> */}

      <div className='mb-10'>
        <h2 className='text-white text-3xl font-bold'>
          Lyrics:
        </h2>

        <div className='mt-5'>

        </div>
      </div>
    </div>
  );
    
};

export default SongDetails;
