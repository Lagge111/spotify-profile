import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { catchErrors } from "../utils";
import { getPlaylistById } from "../spotify";
import { TrackList, SectionWrapper } from "../components";

const Playlist = () => {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState(null);
  const [tracksData, setTracksData] = useState(null);
  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getPlaylistById(id);
      setPlaylist(data);
      setTracksData(data.tracks);
    };

    catchErrors(fetchData());
  }, [id]);

  useEffect(() => {
    if (!tracksData) {
      return;
    }

    const fetchMoreData = async () => {
      if (tracksData.next) {
        const { data } = await axios.get(tracksData.next);
        setTracksData(data);
      }
    };
    setTracks((tracks) => [...(tracks ? tracks : []), ...tracksData.items]);

    catchErrors(fetchMoreData());
  }, [tracksData]);

  const tracksForTracklist = useMemo(() => {
    if (!tracks) {
      return;
    }
    return tracks.map(({ track }) => track);
  }, [tracks]);

  return (
    <>
      {playlist && (
        <>
          <header className="flex relative justify-center pb-10 pl-10 mb-10 bg-gradient-to-b from-light_gray/30 to-dark_gray/40 w-full max-h-[350px] min-h-[350px]">
            <div className="flex items-end w-full max-w-[1300px] mx-auto my-0">
              {playlist.images.length && playlist.images[0].url && (
                <img
                  src={playlist.images[0].url}
                  alt="Playlist Artwork"
                  className="w-full max-h-[180px] min-h-[120px] max-w-[180px] mr-8 shadow-2xl bg-dark_gray md:mr-12 object-cover"
                />
              )}
              <div className="font-montserrat">
                <div className="uppercase text-sm mb-2 text-primary_text">
                  Playlist
                </div>
                <h1 className="text-7xl font-extrabold text-primary_text">
                  {playlist.name}
                </h1>
                <p className="text-light_gray text-base mt-2">
                  {playlist.followers.total ? (
                    <span>
                      {playlist.followers.total}{" "}
                      {`follower${playlist.followers.total !== 1 ? "s" : ""}`}
                    </span>
                  ) : null}
                  <span>
                    {playlist.tracks.total}{" "}
                    {`song${playlist.tracks.total !== 1 ? "s" : ""}`}
                  </span>
                </p>
              </div>
            </div>
          </header>
          <main>
            <SectionWrapper title="Playlist" breadcrumb={true}>
              {tracksForTracklist && <TrackList tracks={tracksForTracklist} />}
            </SectionWrapper>
          </main>
        </>
      )}
    </>
  );
};

export default Playlist;
