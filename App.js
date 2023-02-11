import { carritoIndex } from "./carritoIndex.js";
import getData from "./getData.js";

export const mostrarProductos = async () => {
  const contenedor = document.getElementById("contenedor-productos");

  const productos = await getData();

  productos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML += `<div class="card-image">
                        <img src=${producto.img}>
                        <span class="card-title">${producto.nombre}</span> 
                        </div>
                        <div class="card-content">
                            <p>Variedad: ${producto.variedad}</p>
                            <p>Marca: ${producto.Marca} </p>
                            <p>Valor: $${producto.precio}</p>
                            <button class="btn-floating halfway-fab wabes-effect waves-light blue" id=boton${producto.id}>
                                <i class="material-icons">add_shopping_cart</i>
                            </button>
                        </div>    
                        `;

    contenedor.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener("click", () => {
      carritoIndex(producto.id);
    });
  });
};
