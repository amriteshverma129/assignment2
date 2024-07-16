export const fetchAlbums = async () => {
  const response = await fetch("/assets/albums.json");
  const data = await response.json();
  return data;
};
