import React, { useContext } from "react";

import { Songs } from "../Context";

function DetailSong(props) {
  const { song } = useContext(Songs);
  console.log("detail", song.links.images[0].url);
  return (
    <div className="col-span-1 p-3">
      <h2 className="text-sky-400 font-bold">Now playing</h2>
      <h2 className="text-neutral-400 text-2xl">{song.name}</h2>
      <div className="w-[256px] m-auto mt-20">
        <img className="w-full" src={song.links.images[0].url} alt="avatar" />
        <div className="flex justify-between items-center mt-5">
          <img
            className="w-[70px] rounded-full"
            src={song.links.images[1].url}
            alt="singer"
          />
          <span className="text-xl text-white">{song.author}</span>
        </div>
      </div>
    </div>
  );
}

export default DetailSong;
