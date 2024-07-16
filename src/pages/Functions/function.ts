export const fetchAlbums = async () => {
  try {
    const response = await fetch("/assets/albums.json");
    if (response.status >= 400) {
      throw new Error("Error while fetching the album list.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
