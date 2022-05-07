import React, { useState, useEffect } from "react";

import "../styles/Search.css";
import { ToggleColumns } from "./ToggleColumns";
import { ProductList } from "./ProductList";
import { FilterForm } from "./FilterForm";

export const Search = (props) => {
  const [price, setPrice] = useState({ priceFrom: "", priceTo: "" });
  const [products, setProducts] = useState(props.products || []);

  const [columns, setColumns] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: false,
  });

  const onPriceInputChange = (name, value) => {
    setPrice({ ...price, [name]: value });
  };

  const onCheckboxClick = (name, checked) => {
    setColumns({ ...columns, [name]: checked });
  };

  useEffect(() => {
    //TODO: do a debounce here to optimize the search
    setProducts(
      props.products.filter((product) => {
        return !!price.priceTo
          ? product.price > price.priceFrom && product.price < price.priceTo
          : product.price > price.priceFrom;
      })
    );
  }, [price, props]);

  return (
    <div className="Products">
      <FilterForm
        priceFrom={price.priceFrom}
        priceTo={price.priceTo}
        onPriceInputChange={onPriceInputChange}
      />

      <ToggleColumns onCheckboxClick={onCheckboxClick} columns={columns} />

      <ProductList products={products} columns={columns} />
    </div>
  );
};

export default Search;
