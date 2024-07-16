import React, { useState } from "react";
import AlbumCard from "./AlbumCard";
import { Album } from "@/utils/Type";
import { ALL, FILTER_ARRAY, GET_ALBUM } from "@/utils/variables";
import { fetchAlbums } from "../functions/function";

const AlbumContainer: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [filter, setFilter] = useState<string>("All");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch albums and update state
  const handleGetAlbums = async () => {
    setErrorMessage("");
    setIsLoading(true);
    try {
      const albumList = await fetchAlbums();
      setAlbums(albumList);
    } catch (error) {
      if (error instanceof Error) setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Filtered albums based on selected filter
  const filteredAlbums = albums.filter((album) => {
    if (filter === ALL) return true;
    return album.source === filter;
  });

  return (
    <div className="container mx-auto p-4">
      {albums.length === 0 && ( // Show button only if albums are not fetched and not loading
        <div className="flex justify-center mt-4">
          <button
            onClick={() => handleGetAlbums()}
            className="btn-fetch bg-transparent border-amber-200 border-2 text-slate-400 px-4 py-2 rounded"
          >
            {GET_ALBUM}
          </button>
        </div>
      )}
      {isLoading && (
        <div className="flex justify-center mt-10">
          <p className="text-gray-500">Loading albums...</p>
        </div>
      )}
      {albums.length !== 0 && (
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
      <span className="text-red-800 text-md block p-5 text-center">
        {errorMessage}
      </span>
    </div>
  );
};

export default AlbumContainer;
