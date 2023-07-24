import './SongPage.css';
import Songs from "../Songs/Songs";
import AllSong from "../AllSongs/AllSong";
// import MusicPlay from '../Songs/MusicPlay';

function SongPage() {

  return (
    <>
      <div className="song_container">
        {AllSong.map((songs, index) => <Songs key={index} songs={songs} />)}
      </div> 
      {/* <MusicPlay  /> */}
    </>
  )
};
export default SongPage;