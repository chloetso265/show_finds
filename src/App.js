import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Show Finds</h1>
        <h2>Home</h2>
        <h2>Discover</h2>
        <h2>Recommended</h2>
        {/* <Header /> */}
        {/* <Routes>
            <Route path="/" element={<Warehouses />} />
            <Route path="/edit" element={<EditWarehouse />} />
            <Route path="/:id" element={<WarehouseDetails />} />
            <Route path="/addWarehouse" element={<AddWarehouse />} />
            <Route path="/deleteWarehouse" element={<DeleteWarehouse />} />
            <Route
              path="/inventories/delete"
              element={<DeleteInventoryItem />}
            />
            <Route path="/inventories" element={<Inventory />} />
            <Route path="/inventories/edit" element={<EditInventory />} />
            <Route path="/addNewItem" element={<AddItem />} />
            <Route path="/inventories/:id" element={<ItemDetail />} />
          </Routes>
        <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
