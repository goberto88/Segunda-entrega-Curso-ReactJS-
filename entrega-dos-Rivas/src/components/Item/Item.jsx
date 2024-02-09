import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <Link to={`/detalles/${producto.id}`}>
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={producto.imagen}
            alt={producto.descripcion}
            className="h-full w-full object-contain object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <span aria-hidden="true" className="absolute inset-0" />
              {producto.banda}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{producto.descripcion}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">
            {"$" + producto.precio}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
