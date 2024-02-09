import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";





const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);
  const [productoEncontrado, setProductoEncontrado] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../public/articulos.json");
        const data = await response.json();
        setProductos(data);

        const productoEncontrado = data.find((producto) => producto.id === id);

        setProductoEncontrado(productoEncontrado ? productoEncontrado : console.log(`Producto con ID ${id} no encontrado.`));
   
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {productos.length === 0 ? (
        <h1>CARGANDO...</h1>
      ) : productoEncontrado ? (
       
    <div>
       <ItemDetail productoEncontrado={productoEncontrado} />
    </div>

      ) : (
        <h1>Producto no encontrado</h1>
      )}
    </>
  );
};

export default ItemDetailContainer;
