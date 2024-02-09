import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ productoEncontrado }) => {
  return (
    <div className="p-3 max-w-7xl m-auto">
      <div className="mt-6 sm:mt-10">
        <div>
          <div className="grid items-center justify-center h-screen gird-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-6 h-max">
            

            <div className="overflow-hidden rounded-xl">
              <img
                src={productoEncontrado.imagen}
                alt={productoEncontrado.descripcion}
                className="max-w-auto"
              />
            </div>

            

            <div className="flex flex-col justify-between">
              <div>
               

                <h1 className="text-3xl text-red-700 font-semibold sm:text-4xl">
                  {productoEncontrado.banda}
                </h1>

                

                <p className="mt-3 text-gray-600 text-md leading-6 text-justify sm:text-left sm:mt-4">
                  {productoEncontrado.descripcion}
                </p>

               

                <span className="text-xl text-red-700 font-semibold sm:text-2xl">
                  ${productoEncontrado.precio}
                </span>
              </div>

              <ItemCount initial={1} stock={productoEncontrado.stock} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
