import { signOut } from "next-auth/react";
import React from "react";
import { User } from "@styled-icons/heroicons-solid/User";
import { ArrowRight } from "@styled-icons/heroicons-solid/ArrowRight";
import { ShoppingCart } from "@styled-icons/heroicons-outline/ShoppingCart";
import { ViewList } from "@styled-icons/heroicons-outline/ViewList";
import { CubeTransparent } from "@styled-icons/heroicons-outline/CubeTransparent";
import { CurrencyDollar } from "@styled-icons/heroicons-outline/CurrencyDollar";

const MyPamas = () => {
  return (
    <div className="px-3 mt-3">
      <div className="slide_menu">
        <a href="/my/swappa" className="slide_menu_item" title=" My Swappa ">
          <CubeTransparent />
          My Swappa
          <span className="float-end">
            <ArrowRight />
          </span>
        </a>

        <a href="/my/profile" className="slide_menu_item" title="My Profile">
          <User />
          My Profile
          <span className="float-end">
            <ArrowRight />
          </span>
        </a>

        <a
          href="/my/swappa/purchases"
          className="slide_menu_item"
          title="My Purchases"
        >
          <ShoppingCart />
          My Purchases
        </a>

        <a href="/my/swappa/sales" className="slide_menu_item" title="My Sales">
          <CurrencyDollar />
          My Sales
        </a>

        <a
          href="/my/swappa/listings"
          className="slide_menu_item"
          title="My Listings"
        >
          <ViewList />
          My Listings
        </a>
      </div>
      <div className="row mt-3">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col text-right">
          <button
            className="btn btn-outline-danger d-block"
            onClick={() => {
              signOut();
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPamas;
