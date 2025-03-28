import { useContext } from "react";
import { ProductoContext } from "../context/ProductosContext";
import { Card } from "../components/CardCompras";
import "../styles/compras/Compras.css";

export const ComprasPage = () => {
  const { productos } = useContext(ProductoContext);
  return (
    <div className="contenedor-compras">
      <div className="contenedor-productos">
        {productos.map((producto) => (
          <Card key={producto.id} producto={producto}></Card>
        ))}
      </div>
    </div>
  );
};
