import { useDispatch, useSelector } from 'react-redux';
import './MusicPlay.css';
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { AddHeartSong, NextSong, PreviousSong, playPause, progress, removeHeartSong } from '../ReduxToolKit/Redux1';

function MusicPlay() {

  let [isEditing, setIsEditing] = useState(false);

  let selectedSong = useSelector(state => state.song.selectedSong);
  let bolleanValue = useSelector(state => state.song.bolleanValue);
  let likedData = useSelector(state => state.song.likedArr);
  let likedSongs = useSelector(state => state.song.likedArr);
  let dispatch = useDispatch();

  function handleHeart() {
    if (isEditing === false) {
      if (selectedSong.hasOwnProperty('song')) {
        dispatch(AddHeartSong(selectedSong));
      };
      setIsEditing(true);
    } else if (isEditing === true) {
      if (selectedSong.hasOwnProperty('song')) {
        dispatch(removeHeartSong({likedData, song : selectedSong}));
      }
      setIsEditing(false);
    };
  };
  
  function nextSong() {
    dispatch(NextSong({ currentSong: selectedSong }));
  };
  
  function PreSong() {
    dispatch(PreviousSong(selectedSong));
  };
  
  function handlePlayPause() {
    dispatch(playPause());
    let music = document.querySelector('audio');
    if (selectedSong.hasOwnProperty('song')) {
      if (bolleanValue == true) {
        music.pause();
        bolleanValue = false;
      } else if (bolleanValue == false) {
        music.play();
        bolleanValue = true;
      }
    };
  };


  useEffect(() => {
    if (likedSongs.includes(selectedSong)) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    };
    let image = document.querySelector('.imgPlayer img');
    image.src = `${selectedSong.image}`;
    let songTittle = document.querySelector('.songNamePlayer h1');
    songTittle.textContent = `${selectedSong.songName}`
    let music = document.querySelector('audio');
    music.src = `${selectedSong.song}`
    music.play();
  }, [selectedSong]);

  function TimeUpdate(e) {
    let { currentTime, duration } = e.target;

    //! childProgress:-
    let childProgress = document.querySelector('.childProgress');
    if (duration) {
      let progressWidth = (currentTime / duration) * 100;
      childProgress.style.width = `${progressWidth}%`;
    };

    //! startingTime:-
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    let startingTime = document.querySelector('.startingTime');
    if (currentSec < 10) {
      startingTime.textContent = `${currentMin}:0${currentSec}`;
    } else {
      startingTime.textContent = `${currentMin}:${currentSec}`;
    };

    //!duration:-
    let endMin = Math.floor(duration / 60);
    let endSec = Math.floor(duration % 60);
    let endingTime = document.querySelector('.endingTime');
    if (duration) {
      endingTime.textContent = `${endMin}:${endSec}`;
    };

  };

  function handleProgress(e) {
    let music = document.querySelector('audio');
    let { clientWidth } = e.target;
    let { offsetX } = e.nativeEvent;
    let time = (offsetX / clientWidth) * music.duration;
    music.currentTime = time;
    music.play();
    dispatch(progress());
  };

  function handleEnded() {
    dispatch(NextSong(selectedSong));
  };

  return (
    <>
      <div className="MusicPlay">

        <audio onTimeUpdate={TimeUpdate} onEnded={() => handleEnded()} ></audio>
        <div className="imgAndText">  
        <div className="img imgPlayer"><img src = 'https://www.wagbet.com/wp-content/uploads/2019/11/music_placeholder.png' alt="/" /></div>
        <div className="songName songNamePlayer"><h1> songName </h1></div>
        </div>

        <div className="heart" onClick={handleHeart} > {isEditing ? <BsSuitHeartFill/> : <BsSuitHeart/> } </div>

          <div className="progress_container" onClick={handleProgress}>
            <div className="startingTime"> ; </div>
            <div className="parentProgress">
              <div className="childProgress"></div>
            </div>
            <div className="endingTime"> ; </div>
          </div>

          <div className="btn_container">
            <div className="pre_icon" onClick={() => {PreSong()}} ><BiSkipPrevious/></div>
            <div className="play_icon playAndPauseIcon" onClick={() => {handlePlayPause()}} > {bolleanValue ? <BsPauseFill/> : <BsPlayFill/>  }   </div>
            <div className="next_icon" onClick={ () => {nextSong()}} > <BiSkipNext/> </div>
          </div>

      </div>
    </>
  )
};

export default MusicPlay;