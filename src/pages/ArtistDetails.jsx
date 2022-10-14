/* eslint-disable */

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';


const ArtistDetails = () => {

  const { id: artistId } = useParams(); 
  const { activeSong, isPlaying } = useSelector((state) => state.player); //pulls data from state
  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId); 

  if(isFetchingArtistDetails) return <Loader title="Loading artist details" />;

  if(error) return <Error message="Error getting details... Please try again" />;

  return (
    <div className='flex flex-col'> 
      <DetailsHeader 
        artistId={artistId}
        artistData={artistData}
      />

      {/* Related Songs */}
      <RelatedSongs
        data={Object.values(artistData?.songs)} //we are formatting our songs in a way so that we can render songs from that specific artist
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );    
};

export default ArtistDetails;
