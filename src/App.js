import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import Search from "./pages/Search/Search";
import ShowPage from "./pages/ShowPage/ShowPage";
import ArtistPage from "./pages/ArtistPage/ArtistPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/?:keyword" element={<Search />} />
          <Route path="/:showId" element={<ShowPage />} />
          <Route path="/:artistId" element={<ArtistPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
