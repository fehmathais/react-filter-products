import React from "react";

export const ProductList = (props) => {
  // TODO: change index iteration for an specific ID
  return (
    <div id="product-list">
      <header>
        <strong>Product List ({props.products.length} items)</strong>
      </header>
      <table>
        <thead>
          <tr>
            {Object.keys(props.columns).map((column, idx) => (
              <React.Fragment key={idx}>
                {!!props.columns[`${column}`] && (
                  <th key={idx}>
                    {column.charAt(0).toUpperCase() +
                      column.substring(1, column.length)}
                  </th>
                )}
              </React.Fragment>
            ))}
          </tr>
          {props.products.length > 0 &&
            props.products.map((product) => (
              <tr key={product.id}>
                {Object.keys(props.columns).map((column, idx) => (
                  <React.Fragment key={idx}>
                    {!!props.columns[`${column}`] && (
                      <td key={product.id}>{product[`${column}`]}</td>
                    )}
                  </React.Fragment>
                ))}
              </tr>
            ))}
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
