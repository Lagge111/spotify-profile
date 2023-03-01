import { formatDuration } from "../utils";

const TrackList = ({ tracks }) => (
  <>
    {tracks && tracks.length ? (
      <ul className="list-none m-0 p-0">
        {tracks.map((track, i) => (
          <li
            key={i}
            className="grid items-center grid-cols-[20px 1fr] gap-6 p-2 text-light_gray text-sm rounded-md cursor-default hover:bg-dark_gray ease-in-out duration-200"
          >
            <div className="grid grid-cols-3 items-center">
              <div className="flex items-center ml-6">
                {track.album.images.length && track.album.images[2] && (
                  <div className="mr-4 w-[40px] h-[40px] shrink-0 bg-dark_gray">
                    <img src={track.album.images[2].url} alt={track.name} />
                  </div>
                )}
                <div className="text-primary_text text-base font-montserrat">
                  <div>{track.name}</div>
                  <div>
                    {track.artists.map((artist, i) => (
                      <span key={i} className="text-light_gray text-sm">
                        {artist.name}
                        {i !== track.artists.length - 1 && ", "}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block whitespace-nowrap ml-24">
                {track.album.name}
              </div>
              <div className="hidden md:flex justify-end tabular-nums mr-6">
                {formatDuration(track.duration_ms)}
              </div>
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-sm text-light_gray">No tracks available</p>
    )}
  </>
);

export default TrackList;
