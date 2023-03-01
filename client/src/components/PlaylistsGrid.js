import { Link } from "react-router-dom";

const PlaylistsGrid = ({ playlists }) => {
  return (
    <>
      {playlists && playlists.length ? (
        <ul className="grid grid-cols-fluid list-none relative gap-4 m-0 p-0 mx-6">
          {playlists.map((playlist, i) => (
            <li
              key={i}
              className="bg-near_black rounded-lg cursor-default hover:bg-dark_gray ease-in-out duration-200"
            >
              <Link to={`/playlists/${playlist.id}`} className="p-0">
                {playlist.images.length && playlist.images[0] && (
                  <div className="relative pt-[100%] mx-auto mb-6">
                    <img
                      src={playlist.images[0].url}
                      alt={playlist.name}
                      className="absolute top-0 w-full h-full object-cover p-3 rounded-2xl"
                    />
                  </div>
                )}
                <h3 className="text-primary_text text-sm font-semibold font-montserrat pl-3">
                  {playlist.name}
                </h3>
                <p className="text-light_gray text-sm pl-3 mt-1 mb-6">
                  Playlist
                </p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg text-light_gray font-montserrat">
          No playlists available
        </p>
      )}
    </>
  );
};

export default PlaylistsGrid;
