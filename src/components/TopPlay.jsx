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

const TopPlay = () => {
  const dispatch = useDispatch(); //this allows you to access React's dispatch function that is used to send actions to the store
  const { activeSong, isPlaying } = useSelector((state) => state.player); //this allows you to access the state of the application's store via hooks
  const { data } = useGetTopChartsQuery(); 
  const divRef = useRef(null); //using this to scroll to top of page



};

export default TopPlay;
