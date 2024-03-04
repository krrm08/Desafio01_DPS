import React, { useState } from "react";
import { data } from "../app/data";

export const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
  subtotal,
  setSubtotal,
}) => {
  const [productsData, setProductsData] = useState(data);

  //Funcion flecha para actuliazar el stock
  const onAddProduct = (product) => {
    const updatedProduct = { ...product, available: product.available - 1 };

    //confirma si hay disponibilidad, si no la hay muestra mensaje escrito
    if (updatedProduct.available === -1) {
      alert("Lo sentimos, este producto no está disponible por el momento.");
      return;
    }

    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      //Variables de estado para manejar cuando se agreguen productos al carrito
      setTotal(total + product.price);
      setSubtotal(subtotal + product.price);
      setCountProducts(countProducts + 1);
      setAllProducts([...products]);
    } else {
      setTotal(total + product.price);
      setSubtotal(subtotal + product.price);
      setCountProducts(countProducts + 1);
      setAllProducts([...allProducts, { ...updatedProduct, quantity: 1 }]);
    }

    // Actualizar disponibilidad localmente
    setProductsData((prevData) =>
      prevData.map((prevProduct) =>
        prevProduct.id === updatedProduct.id ? updatedProduct : prevProduct
      )
    );
  };

  //redefine la estructura y visualizacion de los productos en data.js
  return (
    <div className="container-items">
      {productsData.map((product) => (
        <div className="item" key={product.id}>
          <figure>
            <img src={product.urlImage} alt={product.title} />
          </figure>
          <div className="info-product">
            <h2>{product.title}</h2>
            <p className="price">${product.price}</p>
            <h4>Disponibles: {product.available} unidades</h4>
            <button onClick={() => onAddProduct(product)}>
              Añadir al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
