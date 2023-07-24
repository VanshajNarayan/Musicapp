import { useState } from 'react';
import './SearchPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { SearchSongs } from '../ReduxToolKit/Redux1';
import SearchResult from './SearchResult';

function SearchPage() {

  let [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();
  const searchSongsArr = useSelector(state => state.song.searchSongsArr);

  function handleSearch(e) {
    setInputValue(e.target.value);
  };

  function handleClick() {
    setInputValue('');
    if (inputValue !== '') {
      dispatch(SearchSongs(inputValue));
    };
  };

  return (
    <>
      <div className="search_container">
        <div className="search_box">
        <div className="input"> <input value={inputValue} onChange={handleSearch} type="text" placeholder=' Search Song' required /> </div>
        <button className='search_btn' onClick={handleClick}>Search</button>
        </div>
        {searchSongsArr.map((songs, index) => <SearchResult key={index} songs = {songs} /> )}
      </div>
    </>
  )
};

export default SearchPage;