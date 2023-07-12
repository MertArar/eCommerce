import React from "react";
import Filter from "./components/Filter/Filter";
import ProductListingSections from "./components/ProductListingSection/ProductListingSection";
import { useData } from "../../contexts/DataProvider";

const ProductListing = () => {
  const { loading } = useData();

  return (
    !loading && (
      <div className="page-container">
        <Filter className="filters" />
        <ProductListing className="product-container" />
      </div>
    )
  );
};

export default ProductListing;
