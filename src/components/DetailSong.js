import React from "react";

function DetailSong(props) {
  return (
    <div className="col-span-1 p-3">
      <h2 className="text-sky-400 font-bold">Now playing</h2>
      <h2 className="text-neutral-400 text-2xl">Sing me to sleep</h2>
      <div className="w-[256px] m-auto mt-20">
        <img
          className="w-full"
          src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576"
          alt="avatar"
        />
        <div className="flex justify-between items-center mt-5">
          <img
            className="w-[70px] rounded-full"
            src="https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a"
            alt="singer"
          />
          <span className="text-xl text-white">Alan Walker</span>
        </div>
      </div>
    </div>
  );
}

export default DetailSong;
