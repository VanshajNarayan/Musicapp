import { useSelector } from 'react-redux';
import './RecentlyPlayed.css';
import RecentlyPlaySong from './RecentlyPlaySong';

function RecentlyPlayed() {

  let recentlyPlayedArr = useSelector(state => state.song.recentlyPlayedArr);
  let uniqueRectlyPlayed = Array.from(new Set(recentlyPlayedArr));

  return (
    <>
      <div className="recently_played">
        <h1 className='recentlyPlayedTitle'>Recently Playlists Songs</h1>
        {uniqueRectlyPlayed.map((RecentlySong, index) => <RecentlyPlaySong key={index} RecentlySong = {RecentlySong} /> )}
      </div>
    </>
  )
};

export default RecentlyPlayed;