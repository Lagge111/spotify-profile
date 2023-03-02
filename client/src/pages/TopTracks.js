import { useState, useEffect } from "react";
import { getTopTracks } from "../spotify";
import { catchErrors } from "../utils";
import {
  SectionWrapper,
  TrackList,
  TimeRangeButtons,
  Footer,
  Loader,
} from "../components";

const TopTracks = () => {
  const [topTracks, setTopTracks] = useState(null);
  const [activeRange, setActiveRange] = useState("short");

  useEffect(() => {
    const fetchData = async () => {
      const userTopTracks = await getTopTracks(`${activeRange}_term`);
      setTopTracks(userTopTracks.data);
    };

    catchErrors(fetchData());
  }, [activeRange]);

  return (
    <main className="mt-16 w-full min-h-screen flex flex-col">
      <SectionWrapper title="Top Tracks" breadcrumb={true}>
        <TimeRangeButtons
          activeRange={activeRange}
          setActiveRange={setActiveRange}
        />
        {topTracks && topTracks.items ? (
          <TrackList tracks={topTracks.items} />
        ) : (
          <Loader />
        )}
      </SectionWrapper>
      <Footer />
    </main>
  );
};

export default TopTracks;
