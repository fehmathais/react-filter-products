import React, { useState } from "react";

import "../styles/Search.css";
import { ToggleColumns } from "./ToggleColumns";
import { ProductList } from "./ProductList";
import { FilterForm } from "./FilterForm";

export const Search = (props) => {
  let displayedProducts = [props.products];
  const [price, setPrice] = useState({ priceFrom: "", priceTo: "" });

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

  const filterProducts = () => {
    // TODO: implement handler for filtering products by price range
  };

  return (
    <div className="Products">
      <FilterForm
        priceFrom={price.priceFrom}
        priceTo={price.priceTo}
        onPriceInputChange={onPriceInputChange}
      />

      <ToggleColumns onCheckboxClick={onCheckboxClick} columns={columns} />

      <ProductList products={displayedProducts} columns={columns} />
    </div>
  );
};

export default Search;
