import { NavBar } from "./components/NavBar";
import { CarritoProvider } from "./context/CarritoProvider";
import { ProductosProvider } from "./context/ProductosProvider";

function App() {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <NavBar></NavBar>
      </CarritoProvider>
    </ProductosProvider>
  );
}

export default App;
