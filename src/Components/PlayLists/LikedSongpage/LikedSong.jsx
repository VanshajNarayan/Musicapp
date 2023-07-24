import './LikedSong.css';
import { FcMusic } from 'react-icons/fc';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { playLikedSongs } from '../../ReduxToolKit/Redux1';

function LikedSong({ likedSong }) {

  let dispatch = useDispatch();

  function playLikedSong() {
    dispatch(playLikedSongs(likedSong));
  };

  return (
    <>
      <div className="allLikedSong"> 
      <div className="audio_icon"> <FcMusic/> </div>
      <p className="songTitle" onClick={() => {playLikedSong()}} > {likedSong.songName}  </p> 
      <div className="threeDotIcon"> <BsThreeDotsVertical/> </div>
      </div>
    </>
  )
};

export default LikedSong;