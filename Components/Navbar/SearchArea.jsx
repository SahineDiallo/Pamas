import React, { useState } from "react";
import styled from "styled-components";
import { ChevronDown } from "@styled-icons/feather/ChevronDown";
import { Search } from "@styled-icons/feather/Search";

const SearchNav = () => {
  const [searchBy, setSearchBy] = useState("All Categories");
  const [showSearchBy, setShowSearchBy] = useState(false);
  const show_cat = showSearchBy ? "show" : "";
  const handleShowSearchBy = () => setShowSearchBy(!showSearchBy);
  const handleSearchBy = (e) => {
    setShowSearchBy(false);
    setSearchBy(e.target.textContent);
  };
  return (
    <div className="px-0 d-md-flex d-none container position-relative">
      <SearchArea className="w-100 mb-lg-1">
        <input type="text" />
        <div className="search__by ">
          <div className="custom__dropdown" onClick={handleShowSearchBy}>
            <span className="px-3">{searchBy}</span>
            <ChevronDown />
          </div>
          <ul
            className={`bg-white list-unstyled d-flex flex-column p-3 position-absolute ${show_cat}`}
          >
            <li onClick={handleSearchBy}>Computers&Laptops</li>
            <li onClick={handleSearchBy}>Shoes</li>
            <li onClick={handleSearchBy}>Electronics</li>
            <li onClick={handleSearchBy}>Fournitures</li>
            <li onClick={handleSearchBy}>Mobiles</li>
          </ul>
        </div>
        <button>
          <Search />
        </button>
      </SearchArea>
    </div>
  );
};

export default SearchNav;

const SearchArea = styled.div`
  display: flex;
  align-items: center;
  width: 94%;
  height: 2.5rem;
  padding: 5px 0 5px;
  margin: 10px auto;
  border-radius: 5px;
  gap: 10px;
  input {
    flex-grow: 1;
    height: 2.2rem;
    border-radius: 5px;
    border-color: #ff6a00;
    outline: none;
    transition: all ease-out 0.3s;
    padding-left: 10px;
    border: 1px solid #ff6a00;
    :focus {
      box-shadow: 0 0 0 1px #ff6a00;
    }
  }
  // .custom__dropdown {
  //   width: 220px;
  // }

  .search__by ul {
    gap: 10px;
    top: 3.5rem;
    z-index: 2;
    border: 1px solid #ff6a00;
    border-radius: 5px;
    // box-shadow: 0 0 25px rgb(63 78 100 / 15%);
    // transform: translateY(calc(-100% - 2.2rem));
    height: 0;
    transition: all ease-in 0.3s;
    opacity: 0;
    li {
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.03rem;
    }
  }
  .search__by {
    .show {
      // transform: translateY(0%);
      height: fit-content;
      opacity: 1;
    }
  }

  .custom__dropdown {
    border: 1px solid #ff6a00;
    height: 2.2rem;
    border-radius: 5px;
    line-height: 2.2rem;
    svg {
      width: 1.4rem;
      height: 1.4rem;
      margin-right: 0.6rem;
      float: right;
      margin-top: 0.4rem;
    }
  }
  button {
    width: fit-content;
    background: #ff6a00;
    right: 10px;
    height: 2.2rem;
    padding: 0 10px;
    border-radius: 0;
    color: white;
    border: none;
    outline: none;
    border-radius: 3px;
    svg {
      height: 2rem;
    }
  }
`;
