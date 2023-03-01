import { useState, useEffect } from "react";
import axios from "axios";
import { getCurrentUserPlaylists } from "../spotify";
import { catchErrors } from "../utils";
import { SectionWrapper, PlaylistsGrid } from "../components";

const Playlists = () => {
  const [playlistsData, setPlaylistsData] = useState(null);
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userPlaylists = await getCurrentUserPlaylists();
      setPlaylistsData(userPlaylists.data);
    };
    catchErrors(fetchData());
  }, []);

  useEffect(() => {
    if (!playlistsData) {
      return;
    }

    //Currently not being used
    const fetchMoreData = async () => {
      if (playlistsData.next) {
        const userPlaylists = await axios.get(playlistsData.next);
        setPlaylistsData(userPlaylists.data);
      }
    };

    setPlaylists((playlists) => [
      ...(playlists ? playlists : []),
      ...playlistsData.items,
    ]);
  }, [playlistsData]);

  return (
    <main>
      <SectionWrapper title="Public Playlists" breadcrumb={true}>
        {playlists && <PlaylistsGrid playlists={playlists} />}
      </SectionWrapper>
    </main>
  );
};

export default Playlists;
