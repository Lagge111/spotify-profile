import { useState, useEffect } from "react";
import { getTopArtists } from "../spotify";
import { catchErrors } from "../utils";
import { ArtistsGrid, SectionWrapper, TimeRangeButtons } from "../components";

const TopArtists = () => {
  const [topArtists, setTopArtits] = useState(null);
  const [activeRange, setActiveRange] = useState("short");

  useEffect(() => {
    const fetchData = async () => {
      const userTopArtists = await getTopArtists(`${activeRange}_term`);
      setTopArtits(userTopArtists.data);
    };

    catchErrors(fetchData());
  }, [activeRange]);

  return (
    <main>
      <SectionWrapper title="Top artists" breadcrumb={true}>
        <TimeRangeButtons
          activeRange={activeRange}
          setActiveRange={setActiveRange}
        />
        {topArtists && topArtists.items && (
          <ArtistsGrid artists={topArtists.items.slice(0, 20)} />
        )}
      </SectionWrapper>
    </main>
  );
};

export default TopArtists;
