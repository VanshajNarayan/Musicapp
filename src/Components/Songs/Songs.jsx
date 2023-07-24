import './Songs.css';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { SELECTEDSONG } from '../ReduxToolKit/Redux1';

function Songs({songs}) {

  const dispatch = useDispatch();

  function handleclick() {
    dispatch(SELECTEDSONG({song : songs}));
  };

  return (
    <>
      <div className="AllSong">
        <div className="songSection" >
          <div className="img"><img src = {`${songs.image}`} alt="/" /></div>
          <div className="songName" onClick={handleclick} ><h1> {songs.songName} </h1></div>
          <div className="heart" > <BsThreeDotsVertical/> </div>
        </div>
      </div>
    </>
  )
};

export default Songs;