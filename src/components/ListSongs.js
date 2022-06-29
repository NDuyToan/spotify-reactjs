import React, { useContext, useEffect, useState } from "react";

import { Songs } from "../Context";

function ListSongs(props) {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setIdSong] = useState(0);
  const handlePlaySong = (idSong) => {
    setIdSong(idSong);
    handleSetSong(idSong);
  };
  useEffect(() => {
    setIdSong(song.id);
  }, [song]);

  return (
    <div className="list-song col-span-2 pt-3 overflow-y-scroll">
      <table className="table-auto w-full">
        <thead className="text-white font-bold h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left w-[60%]">Title</th>
            <th className="w-[20%]">Author</th>
            <th className="w-[10%]">
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody className="text-neutral-400 mt-4 bg-[#1e2a3b]">
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={`hover:bg-slate-400 hover:text-teal-300 cursor-pointer transition-all h-10 ${
                idSong === song.id && "text-teal-300 bg-slate-400"
              }`}
              onClick={() => handlePlaySong(song.id)}
            >
              <td className="text-center">{index + 1}</td>
              <td>{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                <a href={song.url}>
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListSongs;
