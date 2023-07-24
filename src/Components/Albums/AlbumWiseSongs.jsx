import { useDispatch } from 'react-redux';
import './AlbumWiseSongs.css';
import { HiOutlineMusicNote } from 'react-icons/hi';
import { AlbumSongsPlay } from '../ReduxToolKit/Redux1';

function AlbumWiseSongs({songs}) {

  const dispatch = useDispatch();
  
  function albumMusicPlay() {
    dispatch(AlbumSongsPlay(songs));
  };

  return (
    <>
      <div className="albumWiseSongs">
        <div className="albumwisesongName"> {songs.songName} </div>
        <div className="albumwisesongicon" onClick={() => albumMusicPlay()} > <HiOutlineMusicNote/> </div>
      </div>
    </>
  )
};

export default AlbumWiseSongs;