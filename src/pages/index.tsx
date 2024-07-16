import Head from "next/head";
import AlbumContainer from "./components/AlbumContainer";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Album Musics</title>
      </Head>
      <AlbumContainer />
    </div>
  );
};

export default Home;
