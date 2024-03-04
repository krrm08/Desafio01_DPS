import React from "react";

const Invoice = ({ allProducts, total }) => {
  return (
    <div className="invoice">
      <h2 className="titulo1-factura">¡Muchas Gracias por su compra!</h2>
      {allProducts.map((product, index) => (
        <div key={product.id} className="invoice-item">
          <p className="titulo-factura"> {product.title}</p>
          <p>Cantidad: {product.quantity}</p>
          <p>Precio unitario: ${product.price}</p>
          <p>Subtotal: ${product.price * product.quantity}</p>
          {index !== allProducts.length - 1 && <hr />} {/* Separador entre productos */}
        </div>
      ))}
      <div className="invoice-total">
        <h3>Total a pagar: ${total}</h3>
      </div>
    </div>
  );
};

export default Invoice;
