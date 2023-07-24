import AllSong from '../AllSongs/AllSong';
import ArtistName from './ArtistName';
import './Artists.css';

function Artists() {

  const arr = [];
  for (let i = 0; i < AllSong.length; i++){
    arr.push(AllSong[i].artists);
  };
  const uniqueArr = Array.from(new Set(arr));

  return (
    <>
      <div className="artist_container">
        <div className="artist_title">Artists</div>
        <div className="artist_number"> {uniqueArr.length} Artists </div>
        {uniqueArr.map((artistName, index) => <ArtistName key={index} artistName={artistName} /> )}
      </div>
    </>
  )
};

export default Artists;