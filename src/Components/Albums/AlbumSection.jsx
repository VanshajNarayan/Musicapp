import { useDispatch } from 'react-redux';
import './AlbumSection.css';
import { HiChevronRight } from 'react-icons/hi';
import { AlbumSongs } from '../ReduxToolKit/Redux1';
import { NavLink } from 'react-router-dom';

function AlbumSection({image}) {

  const dispatch = useDispatch();
  function AlbumSong() {
    dispatch(AlbumSongs(image));
  };

  return (
    <>
      <div className="album_Section">
        <div className="ablum_photo"> <img src= {`${image}`} alt="/" /> </div>
        {/* <div className="album_songName"> <h2> {songs.songName} </h2> </div> */}
        <div className="album_forwardicon" onClick={() => AlbumSong()} > <NavLink to = '/AlbumSongs'> <HiChevronRight/> </NavLink>  </div>
      </div>
    </>
  )
};

export default AlbumSection;