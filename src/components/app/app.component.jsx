import "./app.component.css";

const App = () => {
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
            />
          </div>
        </div>

        {/* right navbar */}
        <div className="navbar-right">
        <button>sort by Price (ASC)</button><button>sort by Price (DESC)</button>
        </div>
      </div>

    {/* main section */}
    <div className="products-container flex">

    </div>

    </div>
  );
};

export default App;
