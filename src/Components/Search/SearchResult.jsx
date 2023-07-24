import { useDispatch } from 'react-redux';
import './SearchResult.css';
import { HiPlay } from 'react-icons/hi';
import { SearchSongPlay } from '../ReduxToolKit/Redux1';

function SearchResult({songs}) {

  const dispatch = useDispatch();
  function searchSongPlay() {
    dispatch(SearchSongPlay(songs));
  }

  return (
    <>
      <div className="searchResult">
        <div className="searchSongImg"> <img src= {`${songs.image}`} alt="/" /> </div>
        <div className="searchSongName"> <h3> {songs.songName} </h3> </div>
        <div className="searchplayIcon" onClick={searchSongPlay} > <HiPlay/> </div>
      </div>
    </>
  )
};

export default SearchResult;