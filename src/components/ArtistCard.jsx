/* eslint-disable */
import { useNavigate } from "react-router-dom"; //hook that lets us move to different pages

const ArtistCard = ({ track }) => {
  const navigate = useNavigate(); //lets you navigate without having to use Link

  return (
    <div 
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <img 
        alt='artist' 
        src={track?.images?.coverart} 
        className="w-full h-56 rounded-lg"
      />

      <p className="mt-4 font-semibold text-lg text-white truncate">
        {track?.subtitle}
      </p>
    </div>
  )
};

export default ArtistCard;
