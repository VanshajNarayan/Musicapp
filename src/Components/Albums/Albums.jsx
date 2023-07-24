import AllSong from '../AllSongs/AllSong';
import AlbumSection from './AlbumSection';
import './Albums.css';

function Albums() {

  const albumArr = [];
  for (let i = 0; i < AllSong.length; i++){
    albumArr.push(AllSong[i].image)
  };

  const uniqueAlbum = Array.from(new Set(albumArr));

  return (
    <>
      <div className="Album_container">
        <div className="album_title">Albums</div>
        <div className="album_count"> {uniqueAlbum.length} Albums</div>
        {uniqueAlbum.map((image, index) => <AlbumSection key={index} image = {image} /> )}
      </div>
    </>
  )
};

export default Albums;