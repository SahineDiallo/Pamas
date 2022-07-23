import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { showNav } from "../../store/slices/navSlice";

const BottomNav = () => {
  const dispatch = useDispatch();
  const handleShowNav = () => {
    window.innerWidth <= 768
      ? dispatch(showNav())
      : console.log("show all possible filters");
  };
  return (
    <>
      <nav className="navbar navbar-light d-md-flex d-none bg-white py-0">
        <ul className="nav m-auto justify-content-center">
          <li className="nav-item dropdown" data-menu-slug="iphones">
            <a
              href="/buy/iphones"
              className="nav-link dropdown-toggle"
              title="iPhone"
            >
              <i className="far fa-apple" aria-hidden="true"></i>
              iPhones
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="/buy/unlocked/iphones" className="dropdown-item">
                  <i aria-hidden="true" className="fa-fw far fa-unlock-alt"></i>{" "}
                  Unlocked
                </a>
              </li>
              <li>
                <a href="/buy/apple-iphone-xr" className="dropdown-item">
                  iPhone Xr
                </a>
              </li>
              <li>
                <a href="/buy/apple-iphone-11" className="dropdown-item">
                  iPhone 11
                </a>
              </li>
              <li>
                <a
                  href="/buy/apple-iphone-11-pro-max"
                  className="dropdown-item"
                >
                  iPhone 11 Pro Max
                </a>
              </li>
              <li>
                <a href="/buy/apple-iphone-12" className="dropdown-item">
                  iPhone 12
                </a>
              </li>
              <li>
                <a href="/buy/apple-iphone-13" className="dropdown-item">
                  iPhone 13
                </a>
              </li>
              <li>
                <a
                  href="/buy/apple-iphone-se-2nd-gen"
                  className="dropdown-item"
                >
                  iPhone SE 2nd Gen
                </a>
              </li>
              <li>
                <a href="/buy/apple-iphone-8" className="dropdown-item">
                  iPhone 8
                </a>
              </li>
              <li>
                <a href="/guide/iphones" className="dropdown-item">
                  <i
                    aria-hidden="true"
                    className="fa-fw fal fa-info-circle"
                  ></i>{" "}
                  Buyer's Guide
                </a>
              </li>
              <li>
                <a href="/buy/iphones" className="dropdown-item">
                  <i
                    aria-hidden="true"
                    className="fa-fw fas fa-arrow-right"
                  ></i>{" "}
                  All iPhones
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown" data-menu-slug="phones">
            <a
              href="/buy/phones"
              className="nav-link dropdown-toggle"
              title="Phones"
            >
              <i className="far fa-mobile" aria-hidden="true"></i>
              Phones
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="/buy/unlocked" className="dropdown-item">
                  <i aria-hidden="true" className="fa-fw far fa-unlock-alt"></i>{" "}
                  Unlocked
                </a>
              </li>
              <li>
                <a href="/buy/iphones" className="dropdown-item">
                  <i aria-hidden="true" className="fa-fw fab fa-apple"></i>{" "}
                  Apple
                </a>
              </li>
              <li>
                <a href="/buy/phones/samsung" className="dropdown-item">
                  <i aria-hidden="true" className="fa-fw fab fa-android"></i>{" "}
                  Samsung
                </a>
              </li>
              <li>
                <a href="/buy/phones/google" className="dropdown-item">
                  <i aria-hidden="true" className="fa-fw fab fa-google"></i>{" "}
                  Google
                </a>
              </li>
              <li>
                <a href="/mobile/verizon" className="dropdown-item">
                  Verizon
                </a>
              </li>
              <li>
                <a href="/mobile/t-mobile" className="dropdown-item">
                  T-Mobile
                </a>
              </li>
              <li>
                <a href="/mobile/att" className="dropdown-item">
                  AT&amp;T
                </a>
              </li>
              <li>
                <a href="/buy/phones" className="dropdown-item">
                  <i
                    aria-hidden="true"
                    className="fa-fw fas fa-arrow-right"
                  ></i>{" "}
                  All Phones
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown" data-menu-slug="laptops">
            <a
              href="/laptops"
              className="nav-link dropdown-toggle"
              title="Laptops"
            >
              <i className="far fa-laptop" aria-hidden="true"></i>
              Laptops
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="/buy/macbooks" className="dropdown-item">
                  <i aria-hidden="true" className="fa-fw fab fa-apple"></i>{" "}
                  MacBooks
                </a>
              </li>
              <li>
                <a href="/buy/macbooks/macbook-pro" className="dropdown-item">
                  <i aria-hidden="true" className="fa-fw fab fa-apple"></i>{" "}
                  MacBook Pro
                </a>
              </li>
              <li>
                <a href="/buy/macbooks/macbook-air" className="dropdown-item">
                  <i aria-hidden="true" className="fa-fw fab fa-apple"></i>{" "}
                  MacBook Air
                </a>
              </li>
              <li>
                <a href="/laptops/chromebooks" className="dropdown-item">
                  <i aria-hidden="true" className="fa-fw fab fa-chrome"></i>{" "}
                  Chromebooks
                </a>
              </li>
              <li>
                <a href="/laptops/windows" className="dropdown-item">
                  <i aria-hidden="true" className="fa-fw fab fa-windows"></i>{" "}
                  Windows
                </a>
              </li>
              <li>
                <a href="/guide/macbook" className="dropdown-item">
                  <i
                    aria-hidden="true"
                    className="fa-fw fal fa-info-circle"
                  ></i>{" "}
                  MacBook Guide
                </a>
              </li>
              <li>
                <a href="/laptops" className="dropdown-item">
                  <i
                    aria-hidden="true"
                    className="fa-fw fas fa-arrow-right"
                  ></i>{" "}
                  All Laptops
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown" data-menu-slug="computers">
            <a
              href="/computers"
              className="nav-link dropdown-toggle"
              title="Computers"
            >
              <i className="far fa-laptop" aria-hidden="true"></i>
              Computers
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="/laptops" className="dropdown-item">
                  <i aria-hidden="true" className="fa-fw fas fa-laptop"></i>{" "}
                  Laptops
                </a>
              </li>
              <li>
                <a href="/buy/macbooks" className="dropdown-item">
                  <i aria-hidden="true" className="fa-fw fab fa-apple"></i>{" "}
                  MacBooks
                </a>
              </li>
              <li>
                <a href="/computers/mini-pc" className="dropdown-item">
                  <i aria-hidden="true" className="fa-fw fab fa-apple"></i> Mac
                  minis
                </a>
              </li>
              <li>
                <a href="/computers/all-in-one" className="dropdown-item">
                  <i aria-hidden="true" className="fa-fw fab fa-apple"></i>{" "}
                  iMacs
                </a>
              </li>
              <li>
                <a href="/computers/graphics-card" className="dropdown-item">
                  <i aria-hidden="true" className="fa-fw fas fa-microchip"></i>{" "}
                  Graphics Cards
                </a>
              </li>
              <li>
                <a href="/laptops/chromebooks" className="dropdown-item">
                  <i aria-hidden="true" className="fa-fw fab fa-chrome"></i>{" "}
                  Chromebooks
                </a>
              </li>
              <li>
                <a href="/laptops/windows" className="dropdown-item">
                  <i aria-hidden="true" className="fa-fw fab fa-windows"></i>{" "}
                  Windows
                </a>
              </li>
              <li>
                <a href="/computers" className="dropdown-item">
                  <i
                    aria-hidden="true"
                    className="fa-fw fas fa-arrow-right"
                  ></i>{" "}
                  All Computers
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown" data-menu-slug="wearables">
            <a
              href="/buy/smartwatch"
              className="nav-link dropdown-toggle"
              title="Smart Watches"
            >
              <i className="far fa-clock-o" aria-hidden="true"></i>
              Watches
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="/buy/apple/watch" className="dropdown-item">
                  <i aria-hidden="true" className="fa-fw fab fa-apple"></i>{" "}
                  Apple Watches
                </a>
              </li>
              <li>
                <a href="/buy/smartwatch/samsung" className="dropdown-item">
                  <i aria-hidden="true" className="fa-fw far fab fa-watch"></i>{" "}
                  Samsung Smartwatch
                </a>
              </li>
              <li>
                <a href="/buy/smartwatch/android" className="dropdown-item">
                  <i aria-hidden="true" className="fa-fw fab fa-android"></i>{" "}
                  Android Smartwatch
                </a>
              </li>
              <li>
                <a href="/wearables" className="dropdown-item">
                  <i
                    aria-hidden="true"
                    className="fa-fw fas fa-arrow-right"
                  ></i>{" "}
                  All Wearables
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown" data-menu-slug="tablets">
            <a
              href="/buy/tablets"
              className="nav-link dropdown-toggle"
              title="Tablets"
            >
              <i className="far fa-tablet" aria-hidden="true"></i>
              Tablets
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="/buy/apple/ipad" className="dropdown-item">
                  <i aria-hidden="true" className="fa-fw fab fa-apple"></i> iPad
                </a>
              </li>
              <li>
                <a
                  href="/catalog/type/tablet?brand=samsung"
                  className="dropdown-item"
                >
                  <i aria-hidden="true" className="fa-fw fab fa-android"></i>{" "}
                  Samsung
                </a>
              </li>
              <li>
                <a
                  href="/catalog/type/tablet?platform=windows-mobile"
                  className="dropdown-item"
                >
                  <i aria-hidden="true" className="fa-fw fab fa-windows"></i>{" "}
                  Windows / Surface
                </a>
              </li>
              <li>
                <a
                  href="/catalog/type/tablet?brand=amazon"
                  className="dropdown-item"
                >
                  <i aria-hidden="true" className="fa-fw fab fa-amazon"></i>{" "}
                  Amazon / Kindle
                </a>
              </li>
              <li>
                <a href="/buy/tablets" className="dropdown-item">
                  <i
                    aria-hidden="true"
                    className="fa-fw fas fa-arrow-right"
                  ></i>{" "}
                  All Tablets
                </a>
              </li>
            </ul>
          </li>
          <li
            className="nav-item d-sm-none d-md-none d-lg-block dropdown"
            data-menu-slug="gaming"
          >
            <a
              href="/gaming"
              className="nav-link dropdown-toggle"
              title="Video Games"
            >
              <i className="far fa-gamepad" aria-hidden="true"></i>
              Video Games
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="/gaming/playstation-5" className="dropdown-item">
                  <i
                    aria-hidden="true"
                    className="fa-fw fab fa-playstation"
                  ></i>{" "}
                  PlayStation 5
                </a>
              </li>
              <li>
                <a href="/gaming/playstation-4" className="dropdown-item">
                  <i
                    aria-hidden="true"
                    className="fa-fw fab fa-playstation"
                  ></i>{" "}
                  PlayStation 4
                </a>
              </li>
              <li>
                <a href="/gaming/xbox-series" className="dropdown-item">
                  <i aria-hidden="true" className="fa-fw fab fa-xbox"></i> Xbox
                  Series X/S
                </a>
              </li>
              <li>
                <a href="/gaming/nintendo-switch" className="dropdown-item">
                  Nintendo Switch
                </a>
              </li>
              <li>
                <a href="/catalog/type/game" className="dropdown-item">
                  <i aria-hidden="true" className="fa-fw fab fa-xbox"></i> Games
                </a>
              </li>
              <li>
                <a href="/gaming" className="dropdown-item">
                  <i
                    aria-hidden="true"
                    className="fa-fw fas fa-arrow-right"
                  ></i>{" "}
                  All Gaming
                </a>
              </li>
            </ul>
          </li>
          <li
            className="nav-item d-none d-xxl-block dropdown"
            data-menu-slug="home_tech"
          >
            <a
              href="/home-tech"
              className="nav-link dropdown-toggle"
              title="Home Tech"
            >
              <i className="far fa-house-signal" aria-hidden="true"></i>
              Home Tech
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  href="/home-tech/voice-assistant/search?brand=amazon"
                  className="dropdown-item"
                >
                  <i aria-hidden="true" className="fa-fw fab fa-amazon"></i>{" "}
                  Amazon Alexa
                </a>
              </li>
              <li>
                <a
                  href="/home-tech/voice-assistant/search?brand=google"
                  className="dropdown-item"
                >
                  <i aria-hidden="true" className="fa-fw fab fa-google"></i>{" "}
                  Google Home
                </a>
              </li>
              <li>
                <a
                  href="/home-tech/speaker/search?brand=sonos"
                  className="dropdown-item"
                >
                  <i aria-hidden="true" className="fa-fw far fa-volume-up"></i>{" "}
                  Sonos
                </a>
              </li>
              <li>
                <a
                  href="/home-tech/thermostat/search?brand=nest"
                  className="dropdown-item"
                >
                  <i
                    aria-hidden="true"
                    className="fa-fw far fa-thermometer-empty"
                  ></i>{" "}
                  Nest
                </a>
              </li>
              <li>
                <a href="/home-tech" className="dropdown-item">
                  <i
                    aria-hidden="true"
                    className="fa-fw fas fa-arrow-right"
                  ></i>{" "}
                  All Smart Home
                </a>
              </li>
            </ul>
          </li>
          <li
            className="nav-item d-none d-xxl-block dropdown"
            data-menu-slug="cameras"
          >
            <a
              href="/cameras"
              className="nav-link dropdown-toggle"
              title="Cameras"
            >
              <i className="far fa-camera"></i>
              Cameras
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="/cameras/action" className="dropdown-item">
                  Action Cameras
                </a>
              </li>
              <li>
                <a href="/cameras/canon" className="dropdown-item">
                  Canon
                </a>
              </li>
              <li>
                <a href="/cameras/dslr" className="dropdown-item">
                  DSLR Cameras
                </a>
              </li>
              <li>
                <a href="/cameras/lenses" className="dropdown-item">
                  Lenses
                </a>
              </li>
              <li>
                <a href="/cameras/mirrorless" className="dropdown-item">
                  Mirrorless Cameras
                </a>
              </li>
              <li>
                <a href="/cameras/nikon" className="dropdown-item">
                  Nikon
                </a>
              </li>
              <li>
                <a href="/cameras" className="dropdown-item">
                  <i
                    aria-hidden="true"
                    className="fa-fw fas fa-arrow-right"
                  ></i>{" "}
                  All Cameras
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown" data-menu-slug="sell">
            <a href="/sell" className="nav-link link-info dropdown-toggle">
              <i className="far fa-dollar-sign"></i>
              Sell
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="/sell/iphone" className="dropdown-item">
                  <i aria-hidden="true" className="fa-fw fab fa-apple"></i>{" "}
                  iPhone
                </a>
              </li>
              <li>
                <a href="/sell/phone" className="dropdown-item">
                  <i aria-hidden="true" className="fa-fw far fa-mobile"></i>{" "}
                  Phones
                </a>
              </li>
              <li>
                <a href="/sell/laptop" className="dropdown-item">
                  <i aria-hidden="true" className="fa-fw far fa-laptop"></i>{" "}
                  Laptop
                </a>
              </li>
              <li>
                <a href="/sell/macbook" className="dropdown-item">
                  <i aria-hidden="true" className="fa-fw fab fa-apple"></i>{" "}
                  MacBook
                </a>
              </li>
              <li>
                <a href="/sell/watch" className="dropdown-item">
                  <i aria-hidden="true" className="fa-fw far fa-watch"></i>{" "}
                  Watch
                </a>
              </li>
              <li>
                <a href="/sell/gaming" className="dropdown-item">
                  <i aria-hidden="true" className="fa-fw far fa-gamepad"></i>{" "}
                  Video Gaming
                </a>
              </li>
              <li>
                <a href="/sell/type/graphics-card" className="dropdown-item">
                  <i aria-hidden="true" className="fa-fw far fa-microchip"></i>{" "}
                  Graphics Card
                </a>
              </li>
              <li>
                <a href="/sell" className="dropdown-item">
                  <i
                    aria-hidden="true"
                    className="fa-fw fas fa-arrow-right"
                  ></i>{" "}
                  Sell Used Tech
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default BottomNav;

const ParentDiv = styled.div`
  height: 2.5rem;
  background: #fff;
  border-bottom: 3px solid #004f22;
  padding-right: 10px;
  padding-left: 10px;
  position: relative;
  color: #004f22;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .bottom__nav svg {
    height: 2rem;
    width: 2rem;
  }
`;
const NavFirstOption = styled.div`
  display: flex;
  align-items: center;
  small {
    font-weight: 500;
    letter-spacing: 0.02rem;
    margin-left: 5px;
  }
  svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;
