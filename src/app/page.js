"use client";
import { useState } from "react";
import { Headers } from "@/components/Headers";
import { ProductList } from "@/components/ProductList";
import { data } from "../app/data";

export default function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  const updateProductAvailability = (updatedProduct) => {
    const updatedData = data.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    console.log("Actualización de disponibilidad:", updatedData);
  };

  return (
    <>
      <Headers
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        subtotal={subtotal}
        setSubtotal={setSubtotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        subtotal={subtotal}
        setSubtotal={setSubtotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        data={data}
        updateProductAvailability={updateProductAvailability}
      />
    </>
  );
}