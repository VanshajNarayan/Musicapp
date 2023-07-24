import { useDispatch } from 'react-redux';
import './ArtistName.css';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { ArtistSongs } from '../ReduxToolKit/Redux1';
import { NavLink } from 'react-router-dom';

function ArtistName({artistName}) {

  const dispatch = useDispatch();
  // const artistWiseSongs = useSelector(state => state.song.artistNameWiseSongs);

  function artistSong() {
    dispatch(ArtistSongs(artistName));
  };

  return (
    <>
      <div className="artistName_container">
        <div className="artistName"> {artistName} </div>
        <div className="artist_forwordIcon" onClick={() => artistSong()} > <NavLink to='/ArtistWiseSongs'> <HiOutlineChevronRight/> </NavLink> </div>
      </div>
    </>
  )
};

export default ArtistName;