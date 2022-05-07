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
    currency: true,
  });

  const onPriceInputChange = (name, value) => {
    // TODO: implement price change handler
  };

  const onCheckboxClick = (name, checked) => {
    setColumns({ ...columns, [name]: checked });
  };

  const filterProducts = () => {
    // TODO: implement handler for filtering products by price range
  };

  return (
    <div className="Products">
      <FilterForm priceFrom={""} priceTo={""} onPriceInputChange={""} />

      <ToggleColumns onCheckboxClick={onCheckboxClick} columns={columns} />

      <ProductList products={displayedProducts} columns={columns} />
    </div>
  );
};

export default Search;
