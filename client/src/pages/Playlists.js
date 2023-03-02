import { useState, useEffect } from "react";
// import axios from "axios";
import { getCurrentUserPlaylists } from "../spotify";
import { catchErrors } from "../utils";
import { SectionWrapper, PlaylistsGrid, Footer, Loader } from "../components";

const Playlists = () => {
  const [playlistsData, setPlaylistsData] = useState(null);
  // const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getCurrentUserPlaylists();
      setPlaylistsData(data);
    };

    catchErrors(fetchData());
  }, []);

  // Used for fetching more playlists if total playlist count > 20
  // useEffect(() => {
  //   if (!playlistsData) {
  //     return;
  //   }

  //   const fetchMoreData = async () => {
  //     if (playlistsData.next && playlistsData.next !== null) {
  //       const { data } = await axios.get(playlistsData.next);
  //       setPlaylistsData(data);
  //     }
  //   };

  //   setPlaylists((playlists) => [
  //     ...(playlists ? playlists : []),
  //     ...playlistsData.items,
  //   ]);

  //   catchErrors(fetchMoreData());
  // }, [playlistsData]);

  return (
    <main className="mt-16 w-full min-h-screen flex flex-col">
      <SectionWrapper title="Public Playlists" breadcrumb={true}>
        {playlistsData ? (
          <PlaylistsGrid playlists={playlistsData.items} />
        ) : (
          <Loader />
        )}
      </SectionWrapper>
      <Footer />
    </main>
  );
};

export default Playlists;
