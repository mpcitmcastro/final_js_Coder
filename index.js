import { actualizarCarrito } from "./actualizarCarrito.js";
import { mostrarProductos } from "./App.js";
import {
  actualizarProductosCarrito,
  obtenerCarritoStorage,
} from "./carritoIndex.js";
// import { productos } from "./productos.js";
//Me llamo al primero y pongo los valores y la configuracion del carrito.
document.addEventListener("DOMContentLoaded", () => {
  mostrarProductos();

  if (localStorage.getItem("carrito")) {
    const carritoStorage = obtenerCarritoStorage();
    actualizarProductosCarrito(carritoStorage);
    actualizarCarrito(carritoStorage);
  }
});
