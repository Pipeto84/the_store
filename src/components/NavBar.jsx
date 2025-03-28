import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const NavBar = () => {
  const { listaCompras } = useContext(CarritoContext);
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          Productos
        </NavLink>
        <NavLink to="/carrito">
          <Badge badgeContent={listaCompras.length} color="secondary">
            <ShoppingCartIcon color="inherit" />
          </Badge>
        </NavLink>
      </div>
    </nav>
  );
};
