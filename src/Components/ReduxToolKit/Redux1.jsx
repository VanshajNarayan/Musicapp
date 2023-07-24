import { createSlice } from "@reduxjs/toolkit";
import AllSong from "../AllSongs/AllSong";

const initialState = {
  selectedSong: {},
  index: undefined,
  bolleanValue : false,
  likedArr : [],
  recentlyPlayedArr : [],
  artistNameWiseSongs : [],
  artistName : '',
  albumWiseSongs : [],
  albumPhoto : '',
  searchSongsArr : [],
};

export const songSlices = createSlice({
  name: "song",
  initialState,
  reducers: {
    SELECTEDSONG: (state, action) => {
      state.selectedSong = action.payload.song;
      state.bolleanValue = true;
      state.recentlyPlayedArr.push(state.selectedSong);
      return state;
    },
    NextSong: (state, action) => {
      let {currentSong} = action.payload
      if (AllSong.includes(currentSong)) {
        state.index = AllSong.indexOf(currentSong);
      };
      state.index = state.index + 1;
      if (state.index < AllSong.length) {
        state.selectedSong = AllSong[state.index];
      };
      if (state.bolleanValue === false) { state.bolleanValue = true };
      state.recentlyPlayedArr.push(state.selectedSong);
      return state;
    },
    PreviousSong: (state, action) => {
      let currentSong = action.payload;
      if (AllSong.includes(currentSong)) {
        state.index = AllSong.indexOf(currentSong);
      };
      state.index = state.index - 1;
      if (state.index >= 0) {
        state.selectedSong = AllSong[state.index];
      };
      if (state.bolleanValue === false) { state.bolleanValue = true };
      state.recentlyPlayedArr.push(state.selectedSong);
      return state;
    },
    playPause: (state) => {
      if (state.bolleanValue == true) {
        state.bolleanValue = false;
      } else if (state.bolleanValue == false) {
        state.bolleanValue = true;
      };
      return state;
    },
    AddHeartSong: (state, action) => {
      let likedSong = action.payload;
      state.likedArr.push(likedSong);
      return state;
    },
    removeHeartSong: (state, action) => {
      let newArr = [];
      let AllLikedSong = action.payload;
      let unlikedSong = action.payload.song;
      let { likedData } = AllLikedSong;
      likedData.map((likeSong) => {
        if (likeSong !== unlikedSong) {
          newArr.push(likeSong);
        };
      });
      state.likedArr = newArr;
      return state;
    },
    playLikedSongs: (state, action) => {
      state.selectedSong = action.payload;
      state.bolleanValue = true;
      return state;
    },
    progress: (state) => {
      state.bolleanValue = true;
      return state;
    },
    RecentlySongsPlay: (state, action) => {
      state.selectedSong = action.payload;
      state.bolleanValue = true;
      return state;
    },
    ArtistSongs: (state, action) => {
      let artistName = action.payload;
      const artistWiseSongs = [];
      AllSong.map((songs) => {
        if (songs.artists === artistName) {
          state.artistName = artistName;
          artistWiseSongs.push(songs);
        };
      });
      state.artistNameWiseSongs = artistWiseSongs;
      return state;
    },
    ArtistSongsPlay: (state, action) => {
      state.selectedSong = action.payload;
      state.bolleanValue = true;
      state.recentlyPlayedArr.push(state.selectedSong);
      return state;
    },
    AlbumSongs: (state, action) => {
      let albumImage = action.payload;
      const albumSongs = [];
      AllSong.map((songs) => {
        if (songs.image === albumImage) {
          state.albumPhoto = albumImage;
          albumSongs.push(songs);
        };
      });
      state.albumWiseSongs = albumSongs;
      return state;
    },
    AlbumSongsPlay: (state, action) => {
      state.selectedSong = action.payload;
      state.bolleanValue = true;
      state.recentlyPlayedArr.push(state.selectedSong);
      return state;
    },
    SearchSongs: (state, action) => {
      let searchSong = action.payload;
      const searchSongsLists = [];
      AllSong.map((songs) => {
        if (songs.songName.toLocaleLowerCase() === searchSong.toLocaleLowerCase()) {
          searchSongsLists.push(songs);
        }
      });
      state.searchSongsArr = searchSongsLists;
      return state;
    }, 
    SearchSongPlay: (state, action) => {
      state.selectedSong = action.payload;
      state.bolleanValue = true;
      state.recentlyPlayedArr.push(state.selectedSong);
      return state;
    },
  },
});

export const { SearchSongs, SearchSongPlay, SELECTEDSONG, AlbumSongs, AlbumSongsPlay, ArtistSongs, ArtistSongsPlay, RecentlySongsPlay, NextSong, progress, playLikedSongs, PreviousSong, playPause, AddHeartSong, removeHeartSong } = songSlices.actions;
export default songSlices.reducer;