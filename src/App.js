import "antd/dist/antd.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CartPage from "./pages/CartPage";

import ItemPage from "./pages/ItemPage";

// import Register from "./pages/Register";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
       
          <Route
            path="/"
            element={
              // <ProtectedRoute>
                <ItemPage />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
                <CartPage />
            }
          />
      
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


