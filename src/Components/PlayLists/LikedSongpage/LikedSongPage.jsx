import "./LikedSongPage.css";
import { MdKeyboardBackspace } from 'react-icons/md';
import { BsPlayCircleFill } from 'react-icons/bs';
import { BiSolidPlaylist } from 'react-icons/bi';
import { useSelector } from "react-redux";
import LikedSong from "./LikedSong";
import { NavLink } from "react-router-dom";

function LikedSongPage() {

  let likedSongs = useSelector(state => state.song.likedArr);

  return (
    <>
      <div className="likedSong">

        <div className="some_icon">
          <div className="backArrow"> <NavLink to='/Playlists'> <MdKeyboardBackspace/> </NavLink> </div>
          <div className="addSong"> <b>Add Song</b> </div>
        </div>

        <div className="likedIcon">
          <div className="likedicon_img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png" alt="/" />
          </div>
          <div className="title"> <b>Liked Songs</b> </div>
        </div>

        <div className="allsong_container">
          <div className="playing_icon"> <BsPlayCircleFill/> </div>
          <div className="allSong"> All Songs {likedSongs.length} </div>
          <div className="manageSong"> <BiSolidPlaylist/> </div>
        </div>

        {likedSongs.map((likesong, index) => <LikedSong key={index} likedSong={likesong} /> )}
          
      </div>
    </>
  )
};

export default LikedSongPage;