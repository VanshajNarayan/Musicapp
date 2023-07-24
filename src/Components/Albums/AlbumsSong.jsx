import { useSelector } from 'react-redux';
import './AlbumsSong.css';
import {HiArrowSmLeft} from 'react-icons/hi'
import { NavLink } from 'react-router-dom';
import AlbumWiseSongs from './AlbumWiseSongs';

function AlbumsSong() {

  const albumPhotos = useSelector(state => state.song.albumPhoto);
  const albumWiseGanne = useSelector(state => state.song.albumWiseSongs);

  return (
    <>
      <div className="AlbumsSong">
        <div className="albumsongFirstDiv">  
        <div className="albumSongBackIcon"> <NavLink to = '/albums' > <HiArrowSmLeft/> </NavLink> </div>
        <div className="albumPhoto"> <img style={{width : '100px', objectFit:'contain'}} src= {`${albumPhotos}`} alt="/" /> </div>
        <div className="albumSongcount"> 0 Songs </div>
        </div>
        {albumWiseGanne.map((songs, index) => <AlbumWiseSongs key={index} songs = {songs} /> )}
        {/* <AlbumWiseSongs/> */}
      </div>
    </>
  )
};

export default AlbumsSong;