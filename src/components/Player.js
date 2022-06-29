import "react-h5-audio-player/lib/styles.css";

import React, { useContext } from "react";

import AudioPlayer from "react-h5-audio-player";
import { Songs } from "../Context";

function Player() {
  const { song, handleSetSong } = useContext(Songs);
  const handleClickPre = () => {
    handleSetSong(song.id - 1);
  };
  const handleClickNext = () => {
    handleSetSong(song.id + 1);
  };
  const handleEnded = () => {
    handleSetSong(song.id + 1);
  };

  return (
    <div>
      <AudioPlayer
        src={song.url}
        showSkipControls={true}
        showJumpControls={false}
        className="player-music"
        onClickPrevious={handleClickPre}
        onClickNext={handleClickNext}
        onEnded={handleEnded}
      />
    </div>
  );
}

export default Player;
