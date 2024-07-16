import React, { useEffect, useState } from "react";
import AlbumCard from "./AlbumCard";
import { Album } from "@/utils/Type";
import { ALL, FILTER_ARRAY, GET_ALBUM } from "@/utils/variables";
import { fetchAlbums } from "../Functions/function";

const AlbumContainer: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [filter, setFilter] = useState<string>("All");

  const handleGetAlbums = async () => {
    const albumList = await fetchAlbums();
    setAlbums(albumList);
  };

  const filteredAlbums = albums.filter((album) => {
    if (filter === ALL) return true;
    return album.source === filter;
  });

  return (
    <div className="container mx-auto p-4">
      {!albums.length ? (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => handleGetAlbums()}
            className="btn-fetch bg-transparent border-amber-200 border-2 text-slate-400 px-4 py-2 rounded"
          >
            {GET_ALBUM}
          </button>
        </div>
      ) : (
        <div>
          <div className="filter-buttons mt-4">
            {FILTER_ARRAY.map((source) => (
              <button
                key={source}
                onClick={() => setFilter(source)}
                className={`px-4 py-2 mr-2 rounded ${
                  filter === source ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                {source}
              </button>
            ))}
          </div>
          <div className="album-list grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 mt-10">
            {filteredAlbums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AlbumContainer;
