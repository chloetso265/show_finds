import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Search from "./pages/Search/Search";
// import HomePage from "./pages/ShowPage/ShowPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<Search />} />
          {/* <Route path="/:id" element={<ShowPage />} /> */}
          {/* <Route path="/edit" element={<EditWarehouse />} />
            <Route path="/deleteWarehouse" element={<DeleteWarehouse />} />
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
