/* eslint-disable */

import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice"; //this is a state that has to do with the play/pause functionality
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

import 'swiper/css';
import 'swiper/css/free-mode';

const TopChartCard = ({ song, i }) => (
  <div className="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
    {song.title}
  </div>
)

const TopPlay = () => {
  const dispatch = useDispatch(); //this allows you to access React's dispatch function that is used to send actions to the store
  const { activeSong, isPlaying } = useSelector((state) => state.player); //this allows you to access the state of the application's store via hooks
  const { data } = useGetTopChartsQuery(); //data is the top 50 songs
  const divRef = useRef(null); //using this to scroll to top of page, or keep it from scrolling to the bottom when we reload the page

  useRef(() => {
    divRef.current.scrollIntoView({behavior: 'smooth'}); //ensures we scroll to top of page when app loads
  });


  // Top of Charts
  const topPlays = data?.slice(0, 5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  }

  return (
    <div ref={divRef} className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col" >
      <div className='w-full flex flex-col'>
        <div className='flex flex-row justify-between items-center'>
          <h2 className='text-white font-bold text-2xl'>
            Top of Charts
          </h2>
          <Link to='/top-charts'>
            <p className='text-gray-300 text-base cursor-pointer'>
              See more...
            </p>
          </Link>
        </div>

        <div className='mt-4 flex flex-col gap-1'>
          {topPlays?.map((song, i) => (
            <TopChartCard 
              key={song.key}
              song={song}
              i={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPlay;
