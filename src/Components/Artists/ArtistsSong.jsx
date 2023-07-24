import { useDispatch } from 'react-redux';
import './ArtistsSong.css';
import { ArtistSongsPlay } from '../ReduxToolKit/Redux1';

function ArtistsSong({songs}) {

  const dispatch = useDispatch();
  function artistSongPlay() {
    dispatch(ArtistSongsPlay(songs));
  };

  return (
    <>
      <div className="artistsSongs">
        <div className="artistsong_Name" onClick={() => artistSongPlay()}> {songs.songName} </div>
      </div>
    </>
  )
};

export default ArtistsSong;