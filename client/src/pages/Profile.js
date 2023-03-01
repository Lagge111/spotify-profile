import { useState, useEffect } from "react";
import { catchErrors } from "../utils";
import {
  getCurrentUserProfile,
  getCurrentUserPlaylists,
  getTopArtists,
  getTopTracks,
} from "../spotify";
import {
  SectionWrapper,
  ArtistsGrid,
  TrackList,
  PlaylistsGrid,
} from "../components";
import { logout } from "../spotify";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  const [topArtists, setTopArtists] = useState(null);
  const [topTracks, setTopTracks] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userProfile = await getCurrentUserProfile();
      setProfile(userProfile.data);

      const userPlaylists = await getCurrentUserPlaylists();
      setPlaylists(userPlaylists.data);

      const userTopArtist = await getTopArtists();
      setTopArtists(userTopArtist.data);

      const userTopTracks = await getTopTracks();
      setTopTracks(userTopTracks.data);
    };

    catchErrors(fetchData());
  }, []);

  console.log(topTracks);

  return (
    <>
      {profile && (
        <div className="flex flex-col justify-center items-center pt-32">
          <div className="flex justify-center">
            {profile.images.length && profile.images[0].url && (
              <img
                className="w-[80%] max-w-[250px] min-w-[120px] rounded-full"
                src={profile.images[0].url}
                alt="Avatar"
              />
            )}
          </div>
          <div className="text-primary_text font-montserrat mt-8">
            <p className="text-6xl font-bold font-montserrat">
              {profile.display_name}
            </p>
            <div className="flex flex-row gap-4 mt-6 justify-evenly">
              <div className="flex flex-col items-center">
                <p className="text-secondary font-semibold text-lg">
                  {profile.followers.total}
                </p>
                <p className="text-primary_text/60 text-sm">
                  Follower
                  {profile.followers.total !== 1 ? "s" : ""}
                </p>
              </div>
              {playlists && (
                <div className="flex flex-col items-center">
                  <p className="text-secondary font-semibold text-lg">
                    {playlists.total}
                  </p>
                  <p className="text-primary_text/60 text-sm">
                    Playlist{playlists.total !== 1 ? "s" : ""}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center items-center mt-10">
        <button
          onClick={logout}
          className="text-white py-2 px-4 bg-primary border-2 border-primary_text/30 rounded-full z-10 font-montserrat text-sm hover:filter hover:brightness-110 ease-in-out duration-200"
        >
          LOG OUT
        </button>
      </div>
      {topArtists && (
        <main className="mt-20">
          <SectionWrapper
            title="Top artists this month"
            seeAllLink="/top-artists"
          >
            <ArtistsGrid artists={topArtists?.items?.slice(0, 10)} />
          </SectionWrapper>
          <SectionWrapper
            title="Top tracks this month"
            seeAllLink="/top-tracks"
          >
            <TrackList tracks={topTracks?.items?.slice(0, 10)} />
          </SectionWrapper>
          <SectionWrapper title="Playlists" seeAllLink="/playlists">
            <PlaylistsGrid playlists={playlists?.items?.slice(0, 10)} />
          </SectionWrapper>
        </main>
      )}
    </>
  );
};

export default Profile;
