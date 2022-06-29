import "./App.css";

import DataSongs from "./data/songs.json";
import DetailSong from "./components/DetailSong";
import ListSongs from "./components/ListSongs";
import Navbar from "./components/Navbar";
import Player from "./components/Player";
import { Songs } from "./Context";
import { useState } from "react";

function App() {
  const [song, setSong] = useState(DataSongs[0]);

  const handleSetSong = (idSong) => {
    const song = DataSongs.find((song) => song.id === idSong);
    if (!song) {
      setSong(DataSongs[0]);
    } else {
      setSong(song);
    }
  };
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
          {/* span 1 */}
          <DetailSong />
          {/* span 2 */}
          <ListSongs />
        </div>
        <Player />
      </Songs.Provider>
    </div>
  );
}

export default App;
