"use client";
import { useState } from "react";
import Invoice from "./Invoice";

export const Headers = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
  subtotal,
  setSubtotal,
}) => {
  const [active, setActive] = useState(false);
  const [showInvoicePopup, setShowInvoicePopup] = useState(false);

  const onDeleteProduct = (product) => {
    // Mostrar un mensaje de confirmación antes de eliminar un producto
    const isConfirmed = window.confirm(`¿Seguro que quieres eliminar ${product.title} del carrito?`);
    
    if (isConfirmed) {
      const results = allProducts.filter((item) => item.id !== product.id);
      setTotal(total - product.price * product.quantity);
      setCountProducts(countProducts - product.quantity);
      setSubtotal(product.price * product.quantity);
      setAllProducts(results);
    }
  };
  
  const onCleanCart = () => {
    // Mostrar un mensaje de confirmación antes de vaciar el carrito
    const isConfirmed = window.confirm("¿Seguro que quieres vaciar el carrito?");
    
    if (isConfirmed) {
      setAllProducts([]);
      setTotal(0);
      setCountProducts(0);
      setSubtotal(0);
    }
  };
  
  return (
    <header>
      <h1>Cub Shop</h1>
      <div className="container-icon">
        <div className="container-cart-icon" onClick={() => setActive(!active)}>
          <img
            src="https://e7.pngegg.com/pngimages/833/426/png-clipart-black-shopping-cart-icon-for-free-black-shopping-cart.png"
            alt="carrito"
            className="icon-cart"
          />
          <div className="count-products">
            <span id="contador-productos">{countProducts}</span>
          </div>
        </div>
        <div
          className={`container-cart-products ${active ? "" : "hidden-cart"}`}
        >
          {allProducts.length ? (
            <>
              <div className="row-product">
                {allProducts.map((product) => (
                  <div className="cart-product" key={product.id}>
                    <div className="info-cart-product">
                      <span className="cantidad-producto-carrito">
                        {product.quantity}
                      </span>
                      <p className="titulo-producto-carrito">{product.title}</p>
                      <span className="precio-producto-carrito">
                        ${product.price}
                      </span>
                      <span className="precio-producto-carrito">
                        ${subtotal}
                      </span>
                    </div>
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png"
                      alt="cerrar"
                      className="icon-close"
                      onClick={() => onDeleteProduct(product)}
                    />
                  </div>
                ))}
              </div>
              <div className="cart-total">
                <h3>Total:</h3>
                <span className="total-pagar">${total}</span>
              </div>
              <button className="btn-clear-all" onClick={onCleanCart}>
                Vaciar Carrito
              </button>
              <button
                className="btn-factura"
                onClick={() => setShowInvoicePopup(!showInvoicePopup)}
              >
                Ver Factura
              </button>

              {showInvoicePopup && (
                <div className="invoice-popup">
                  <div className="invoice-container">
                    <button
                      className="close-popup"
                      onClick={() => setShowInvoicePopup(false)}
                    >
                      Seguir Comprando
                    </button>
                    <Invoice allProducts={allProducts} total={total} />
                  </div>
                </div>
              )}
            </>
          ) : (
            <p className="cart-empty">El carrito está vacío</p>
          )}
        </div>
      </div>
    </header>
  );
};
