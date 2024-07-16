import { Album } from "@/utils/Type";
import { useEffect, useState } from "react";

export const useFetchAlbum = () => {
  const [albumList, setAlbumList] = useState<Album[]>([]);

  const fetchAlbums = async () => {
    const response = await fetch("/assets/albums.json");
    const data = await response.json();
    setAlbumList(data);
  };

  useEffect(() => {
    const cachedData = localStorage.getItem("albumList");
    if (cachedData) {
      setAlbumList(JSON.parse(cachedData));
      return;
    }
    fetchAlbums();
  }, []);

  return albumList;
};
