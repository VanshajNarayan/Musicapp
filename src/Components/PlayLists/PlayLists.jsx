import { useSelector } from "react-redux";
import "./PlayLists.css";
import { MdNavigateNext} from 'react-icons/md';
import { NavLink } from "react-router-dom";

function PlayLists() {

  let likedData = useSelector(state => state.song.likedArr);
  let recentlyPlayedArr = useSelector(state => state.song.recentlyPlayedArr);
  let uniqueRectlyPlayed = Array.from(new Set(recentlyPlayedArr));

  return (
    <>
      <div className="liked_container">
        <div className="heart_img">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png" alt="/" />
        </div>
        <div className="textContentplaylist">
          <h2 className="liked">Liked</h2>
          <p className="songCount"> {likedData.length} songs</p>
        </div>
        <div className="next_dropDown">
          <span> <NavLink to="/likedsong"> <MdNavigateNext/> </NavLink> </span>
        </div>
      </div>

      <div className="liked_container">
        <div className="heart_img">
          <img src="https://static.thenounproject.com/png/3565622-200.png" alt="/" />
        </div>
        <div className="textContentplaylist">
          <h2 className="liked"> Recently played </h2>
          <p className="songCount"> {uniqueRectlyPlayed.length} songs</p>
        </div>
        <div className="next_dropDown">
          <span> <NavLink to="/RecentlyPlayed"> <MdNavigateNext/> </NavLink>  </span>
        </div>
      </div>

    </>
  )
};

export default PlayLists;