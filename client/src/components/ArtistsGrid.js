const ArtistsGrid = ({ artists }) => (
  <>
    {artists && artists.length ? (
      <ul className="grid grid-cols-fluid list-none relative gap-6 m-0 p-0 mx-6">
        {artists.map((artist, i) => (
          <li
            key={i}
            className="bg-near_black rounded-md cursor-default hover:bg-dark_gray ease-in-out duration-200"
          >
            <div className="p-4">
              {artist.images[0] && (
                <div className="relative pt-[100%] mt-0 mx-auto mb-6">
                  <img
                    src={artist.images[0].url}
                    alt={artist.name}
                    className="absolute top-0 w-full h-full object-cover bg-primary/60 rounded-full"
                  />
                </div>
              )}
              <p className="text-primary_text text-sm font-semibold font-montserrat">
                {artist.name}
              </p>
              <p className="text-light_gray text-sm">Artist</p>
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-sm text-light_gray">No artists available</p>
    )}
  </>
);

export default ArtistsGrid;
