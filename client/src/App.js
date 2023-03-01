import "./App.css";
import { useEffect, useState } from "react";
import { accessToken, getCurrentUserProfile } from "./spotify";
import { catchErrors } from "./utils";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Login, Playlists, Profile, TopArtists, TopTracks } from "./pages";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setToken(accessToken);

    const fetchData = async () => {
      const { data } = await getCurrentUserProfile();
      setProfile(data);
    };

    catchErrors(fetchData());
  }, []);

  return (
    <div className="bg-primary h-full flex flex-col justify-center items-center">
      <header className="App-header">
        {!token ? (
          <Login />
        ) : (
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-tracks" element={<TopTracks />} />
              <Route path="/playlists/:id" element={<h1>Playlist</h1>} />
              <Route path="/playlists" element={<Playlists />} />
              <Route path="/" element={<Profile />} />
            </Routes>
          </Router>
        )}
      </header>
    </div>
  );
}

export default App;
