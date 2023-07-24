import { NavLink } from 'react-router-dom';
import './ArtistWiseSong.css';
import { HiArrowSmLeft } from 'react-icons/hi';
import ArtistsSong from './ArtistsSong';
import { useSelector } from 'react-redux';

function ArtistWiseSong() {

  const artistWiseSongs = useSelector(state => state.song.artistNameWiseSongs);
  const artistName = useSelector(state => state.song.artistName);

  return (
    <>
      <div className="artistWiseSong">
        <div className="firstDiv">
          <div className="backpage_icon"> <NavLink to='/artists'> <HiArrowSmLeft/> </NavLink> </div>
          <div className="artistNameTitle"> {artistName} </div>
          <div className="artistSongCount"> {artistWiseSongs.length} Songs</div>
        </div>
        {artistWiseSongs.map((songs, index) => <ArtistsSong key={index} songs = {songs} /> )}
      </div>
    </>
  )
};

export default ArtistWiseSong;