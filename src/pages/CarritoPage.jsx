import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import "../styles/compras/Carrito.css";

export const CarritoPage = () => {
  const {
    listaCompras,
    eliminarProducto,
    aumentarProducto,
    disminuirProducto,
  } = useContext(CarritoContext);

  const handlePrint = () => print();
  localStorage.clear();
  const handleTotal = () => {
    return listaCompras
      .reduce((total, item) => total + item.price * item.cantidad, 0)
      .toFixed(2);
  };
  return (
    <div className="carrito">
      <h1 className="tituloCarrito" hidden={listaCompras < 1}>
        Productos agregados
      </h1>
      <h3 className="sinCompras" hidden={listaCompras.length > 0}>
        No tienes{" "}
        <a className="linkCompras" hidden={listaCompras.length > 0} href="/">
          productos
        </a>{" "}
        agregados
      </h3>
      <table className="table table-striped" hidden={listaCompras < 1}>
        <thead>
          <tr>
            <th scope="col" className="column">
              Nombre
            </th>
            <th scope="col" className="column">
              Precio
            </th>
            <th scope="col" className="column">
              Cantidad
            </th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {listaCompras.map((compra) => (
            <tr key={compra.id}>
              <td scope="row">{compra.title}</td>
              <td>${compra.price}</td>
              <td>
                <button
                  className="btn btn-ouline"
                  type="button"
                  onClick={() => disminuirProducto(compra.id)}
                >
                  -
                </button>
                <button className="btn btn-primary">{compra.cantidad}</button>
                <button
                  className="btn btn-ouline"
                  type="button"
                  onClick={() => aumentarProducto(compra.id)}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => eliminarProducto(compra.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <th>Total: </th>
            <th>$ {handleTotal()}</th>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button
          className="btn btn-primary"
          type="button"
          onClick={handlePrint}
          hidden={listaCompras < 1}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};
