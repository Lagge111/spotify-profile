import { Link } from "react-router-dom";

const PlaylistsGrid = ({ playlists }) => {
  <>
    {playlists && playlists.length ? (
      <ul className="grid grid-cols-fluid list-none relative gap-4 m-0 p-0 mx-6">
        {playlists.map((playlist, i) => (
          <li
            key={i}
            className="bg-near_black rounded-sm cursor-default hover:bg-dark_gray ease-in-out duration-200"
          >
            <Link to={`/playlists/${playlist.id}`} className="p-4">
              {playlist.images.length && playlist.images[0] && (
                <div className="relative pt-[100%] mt-0 mx-auto mb-6">
                  <img src={playlist.images[0].url} alt={playlist.name} />
                </div>
              )}
              <h3 className="text-primary_text text-sm font-semibold font-montserrat">
                {playlist.name}
              </h3>
              <p className="text-light_gray text-sm">Playlist</p>
            </Link>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-sm text-light_gray">No playlists available</p>
    )}
  </>;
};

export default PlaylistsGrid;
