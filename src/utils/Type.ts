export type Album = {
  id: number;
  album: string;
  artist: string;
  cover: string | null;
  source: string;
};

export type AlbumCardProps = {
  album: Album;
};
