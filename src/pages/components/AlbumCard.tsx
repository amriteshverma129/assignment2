import { AlbumCardProps } from "@/utils/Type";
import React from "react";
import Image from "next/image";

const AlbumCard = ({ album }: AlbumCardProps) => {
  return (
    <div className="album-item shadow mt-10">
      <div className="relative">
        <Image
          src={
            album.cover
              ? `/assets/covers/${album.cover}`
              : "/assets/images/undefined_album_cover.png"
          }
          alt={album.album}
          width={200}
          height={200}
          layout="responsive"
          className="album-cover w-full h-48 object-cover"
        />
        {album.cover && (
          <Image
            src="/assets/images/qobuz.png"
            alt="Qobuz Logo"
            width={18}
            height={18}
            className="album-logo absolute bottom-2 right-2 z-50"
          />
        )}
      </div>
      <div className="album-info mt-4">
        <h3 className="text-xs font-semibold text-gray-400">{album.album}</h3>
        <p className="text-sm text-gray-600">{album.artist}</p>
      </div>
    </div>
  );
};

export default AlbumCard;
