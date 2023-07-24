import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Albums from "../Albums/Albums";
import Artists from "../Artists/Artists";
import Navbar from "../Navbar/Navbar";
import './MainComponent.css';
import SongPage from "../SongPage/SongPage";
import PlayListPage from "../PlayListPage/playListPage";
import MusicPlay from "../Songs/MusicPlay";
import LikedSongPage from "../PlayLists/LikedSongpage/LikedSongPage";
import RecentlyPlayed from "../PlayLists/RecentlyPlayed";
import ArtistWiseSong from "../Artists/ArtistWiseSong";
import AlbumsSong from "../Albums/AlbumsSong";
import SearchPage from "../Search/SearchPage";

function MainComponent() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element= {<SongPage/>} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/Playlists" element={<PlayListPage />} />
          <Route path="/likedsong" element={<LikedSongPage />} />
          <Route path="/RecentlyPlayed" element={<RecentlyPlayed />} />
          <Route path="/ArtistWiseSongs" element={<ArtistWiseSong/>} />
          <Route path="/AlbumSongs" element={<AlbumsSong/>} />
          <Route path="/SearchPage" element={<SearchPage/>} />
        </Routes>
        <MusicPlay/>
      </Router>
    </>
  )
};

export default MainComponent;