import './RecentlyPlaySong.css';
import {PiMusicNotesSimpleBold} from 'react-icons/pi'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import { useDispatch } from 'react-redux';
import { RecentlySongsPlay } from '../ReduxToolKit/Redux1';

function RecentlyPlaySong({RecentlySong}) {

  let dispatch = useDispatch();

  function recentlySongPlay() {
    // console.log(RecentlySong);
    dispatch(RecentlySongsPlay(RecentlySong));
  };

  return (
    <>
      <div className="recently_play_song">
        <div className="music_icon"> <PiMusicNotesSimpleBold/> </div>
        <div className="recentlySongName" onClick={() => recentlySongPlay()} > {RecentlySong.songName} </div>
        <div className="threeDots"> <BiDotsVerticalRounded/> </div>
      </div>
    </>
  )
};

export default RecentlyPlaySong;