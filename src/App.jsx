import { NavBar } from "./components/NavBar";
import { CarritoProvider } from "./context/CarritoProvider";
import { ProductosProvider } from "./context/ProductosProvider";
import { Routes, Route, Navigate } from "react-router-dom";
import { ComprasPage } from "./pages/ComprasPage";
import { CarritoPage } from "./pages/CarritoPage";

function App() {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
          <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>
        </Routes>
      </CarritoProvider>
    </ProductosProvider>
  );
}

export default App;
