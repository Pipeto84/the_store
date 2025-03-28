import { useState, useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import "../styles/compras/CardCompras.css";

export const Card = ({ producto }) => {
  const { agregarProducto, eliminarProducto } = useContext(CarritoContext);

  const [agregado, setAgregado] = useState(producto.agregar);

  const clickAgregar = (producto) => {
    setAgregado(true);
    agregarProducto(producto);
  };
  const clickQuitar = (producto) => {
    setAgregado(false);
    eliminarProducto(producto.id);
  };
  return (
    <div className="tarjeta">
      <img className="tarjeta-imagen" src={producto.image} alt="imagen" />
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{producto.title}</h3>
        <p className="tarjeta-descripcion">{producto.description}</p>
        <p className="tarjeta-precio">$ {producto.price}</p>
        <div className="botones-compra">
          {agregado ? (
            <button
              className="boton-quitar"
              type="button"
              onClick={() => clickQuitar(producto)}
            >
              Quitar del carrito
            </button>
          ) : (
            <button
              className="boton-agregar"
              type="button"
              onClick={() => clickAgregar(producto)}
            >
              Agregar al carrito
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
