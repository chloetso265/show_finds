import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
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
          <Route path="/search" element={<Search />} />
          <Route path="/:showId" element={<ShowPage />} />
          <Route path="/:artistId" element={<ArtistPage />} />
          {/* <Route path="/deleteWarehouse" element={<DeleteWarehouse />} />
            <Route
              path="/inventories/delete"
              element={<DeleteInventoryItem />}
            />
            <Route path="/inventories" element={<Inventory />} />
            <Route path="/inventories/edit" element={<EditInventory />} />
            <Route path="/addNewItem" element={<AddItem />} />
  <Route path="/inventories/:id" element={<ItemDetail />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
