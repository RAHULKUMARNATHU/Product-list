import _ from "lodash";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ProductCard } from "..";
import { products } from "../../constant";

import "./app.component.css";

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState(
    products.slice(0, 15)
  );

  const [hasMore, setHasmore] = useState(true);

  // handle next product
  const handleNext = () => {
    if (filteredProducts.length >= 100) {
      setHasmore(false);
      return;
    }
    const nextProducts = products.slice(
      filteredProducts.length,
      filteredProducts.length + 15
    );

    console.log({ nextProducts });
    setFilteredProducts((prev) => [...prev, ...nextProducts]);
  };

  // Handle search by Price

  const handleSearch = (value) => {
    const filteredProductsByPrice = filteredProducts.filter(
      (product) => product.price >= Number(value)
    );
    setFilteredProducts(filteredProductsByPrice);
  };

  return (
    <div className="main-page-container">
      {/* navbar  */}
      <div className="navbar flex">
        {/* left-navbar */}
        <div className="navbar-left">
          <div className="navbar-search-container">
            <label htmlFor="search">Search for stuff</label>
            <input
              id="search"
              type="number"
              min={1000}
              max={10000}
              placeholder="Search...."
              autoFocus
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>

        {/* right navbar */}
        <div className="navbar-right">
          <button>sort by Price (ASC)</button>
          <button>sort by Price (DESC)</button>
        </div>
      </div>

      {/* main section */}
      <div className="products-container flex">
        <InfiniteScroll
          dataLength={filteredProducts.length}
          next={handleNext}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
          height="calc(100vh - 64px)"
        >
          {filteredProducts.map(({ id, price, title }, index) => (
            <ProductCard
              key={id}
              name={`${id} ${title}`}
              price={price}
              image="https://powderalloy.com/wp-content/uploads/2015/11/sidebar-placeholder.png"
            />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default App;
