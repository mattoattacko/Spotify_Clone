// this is a dynamic component
// we use it for both the artists detail as well as the song detail

/* eslint-disable */


import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => {

  const artist = artistData?.artists[artistId]?.attributes;

  return (
    <div className='relative w-full flex flex-col'>
      <div className='w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28' />

      <div className='absolute inset-0 flex items-center'>
        <img
          alt="art"
          // if we have the artistId, we want to dive into the specific artist using artistId, and then dive into its attributes, and then dive into its artwork and get the url of the artwork.
          // the URL has other properties in it, such as the hight and width of the image. So we have to explicitly rename them. The API returns a dynamic image, so we can change things around if we want.
          // if we don't have the artistId, then we render just the cover art.
          // we made it more concise below
          // src={ artistId ? artistData?.artists[artistId].attributes?.artwork?.url.replace('{w}', '500').replace('{h}', '500') : songData?.images?.coverArt }
          src={artistId ? artist.artwork?.url.replace('{w}', '500').replace('{h}', '500') 
            : songData?.images?.coverart}
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
        />

        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">
            {/* if we have the artistId, go in the attributes and get the name. If we don't have the artistId, we want the song title */}
            {artistId ? artist?.name : songData?.title}
          </p>

          {/* Takes us to artist details page. This only shows if we are on the song details page and not on the artists details page */}
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0].adamid}`}>
              <p className="text-base text-gray-400 mt-2">
                {songData?.subtitle}
              </p>
            </Link>
          )}

          {/* genre */}
          <p className="text-base text-gray-400 mt-2">
            {artistId
              ? artist?.genreNames[0]
              : songData?.genres?.primary
            }
          </p>
        </div>
      </div>

      <div className="w-full sm:h-44 h-24"/>
    </div>
  );
};


export default DetailsHeader;
