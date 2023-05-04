import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
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
        <h3>Home</h3>
        <h3>Discover</h3>
        <h3>Recommended</h3>
      </BrowserRouter>
    </div>
  );
}

export default App;
