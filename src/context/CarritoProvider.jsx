import { useContext, useReducer } from "react";
import { CarritoContext } from "./CarritoContext";
import { ProductoContext } from "./ProductosContext";

export const CarritoProvider = ({ children }) => {
  const initialLista = [];

  const listaReducer = (state = initialLista, action = {}) => {
    switch (action.type) {
      case "[COMPRAS] Agregar Producto":
        return [...state, action.payload];
      case "[COMPRAS] Eliminar Producto":
        return state.filter((compra) => compra.id !== action.payload);
      case "[COMPRAS] Aumentar Cantidad Producto":
        return state.map((compra) => {
          const cant = compra.cantidad + 1;
          if (compra.id === action.payload)
            return { ...compra, cantidad: cant };
          return compra;
        });
      case "[COMPRAS] Disminuir Cantidad Producto":
        return state.map((compra) => {
          const cant = compra.cantidad - 1;
          if (compra.id === action.payload && compra.cantidad > 1)
            return { ...compra, cantidad: cant };
          return compra;
        });
      default:
        return state;
    }
  };

  const { productos } = useContext(ProductoContext);

  const cambiarAgregarProductos = (idCompra, productos) => {
    productos.map((producto) => {
      if (idCompra === producto.id)
        return (producto.agregar = !producto.agregar);
    });
  };

  const [listaCompras, dispatch] = useReducer(listaReducer, initialLista);

  const agregarProducto = (compra) => {
    compra.cantidad = 1;
    const action = {
      type: "[COMPRAS] Agregar Producto",
      payload: compra,
    };
    cambiarAgregarProductos(compra.id, productos);
    dispatch(action);
  };
  const eliminarProducto = (id) => {
    const action = {
      type: "[COMPRAS] Eliminar Producto",
      payload: id,
    };
    cambiarAgregarProductos(id, productos);
    dispatch(action);
  };
  const aumentarProducto = (id) => {
    const action = {
      type: "[COMPRAS] Aumentar Cantidad Producto",
      payload: id,
    };
    dispatch(action);
  };
  const disminuirProducto = (id) => {
    const action = {
      type: "[COMPRAS] Disminuir Cantidad Producto",
      payload: id,
    };
    dispatch(action);
  };

  return (
    <CarritoContext.Provider
      value={{
        listaCompras,
        agregarProducto,
        eliminarProducto,
        aumentarProducto,
        disminuirProducto,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
