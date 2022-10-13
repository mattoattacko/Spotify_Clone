/* eslint-disable */

import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery } from '../redux/services/shazamCore';

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid, id: artistId } = useParams(); // 'songid' is coming from our Routes in App. Getting the 'songid' will allow us to make an API call to get more details about a specific song.
  const { activeSong, isPlaying } = useSelector((state) => state.player); //pulls data from state
  const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid }); //the song data should contain the lyrics to the song

  return (
    <div className='flex flex-col'> 
      <DetailsHeader 
        artistId={artistId}
        songData={songData}
      />

      <div className='mb-10'>
        <h2 className='text-white text-3xl font-bold'>
          Lyrics:
        </h2>

        <div className='mt-5'>
          {/* loop over song data. Get the first section and check if the type is = to LYRICS. If it is (meaning we have the lyrics), get the songData and map over the text on each line. For each line, return a <p> tag. Else render no lyrics found */}
          {songData?.sections[1].type === 'LYRICS' ? 
            songData?.sections[1]?.text.map((line, i) => (
              <p className="text-gray-400 text-base my-1">{line}</p>
            )) : ( <p className="text-gray-400 text-base my-1">No lyrics found</p>
          )}          
        </div>
      </div>
    </div>
  );
    
};

export default SongDetails;
