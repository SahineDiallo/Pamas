import React from "react";
import { getProviders } from "next-auth/react";

const PamasZone = ({ providers }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-md-3">
          <div id="my-swappa-nav-menu" className="panel panel-default">
            <div className="list-group">
              <a
                href="/my/swappa"
                className="list-group-item list-group-item-action active"
              >
                My Swappa
              </a>

              <a
                className="list-group-item list-group-item-action caret-icon collapsed"
                data-toggle="collapse"
                data-bs-toggle="collapse"
                href="#my-swappa-nav-my-listings"
              >
                My Listings
                <i className="fa fa-caret-down pull-right"></i>
              </a>
              <div
                id="my-swappa-nav-my-listings"
                className="list-group collapse"
              >
                <a
                  href="/my/swappa/listings"
                  className="list-group-item list-group-item-action"
                >
                  Active
                </a>
                <a
                  href="/my/swappa/listings/archive"
                  className="list-group-item list-group-item-action"
                >
                  Archive
                </a>
              </div>

              <a
                href="/my/swappa/purchases"
                className="list-group-item list-group-item-action"
              >
                My Purchases
              </a>
              <a
                href="/my/swappa/sales"
                className="list-group-item list-group-item-action"
              >
                My Sales
              </a>

              <a
                href="/my/swappa/subscriptions"
                className="list-group-item list-group-item-action"
              >
                My Subscriptions
              </a>

              <a
                href="/my/swappa/forums/threads"
                className="list-group-item list-group-item-action"
              >
                My Forums
              </a>

              <a
                data-toggle="collapse"
                data-bs-toggle="collapse"
                href="#my-swappa-nav-my-profile"
                className="list-group-item list-group-item-action caret-icon collapsed"
              >
                My Profile
                <i className="fa fa-caret-down pull-right"></i>
              </a>
              <div
                id="my-swappa-nav-my-profile"
                className="list-group collapse"
              >
                <a
                  href="/my/profile"
                  className="list-group-item list-group-item-action"
                >
                  Edit Profile
                </a>
                <a
                  href="/user/IVC349/profile"
                  className="list-group-item list-group-item-action"
                >
                  View Profile
                </a>
                <a
                  href="/my/profile/paypal"
                  className="list-group-item list-group-item-action"
                >
                  Payment Settings
                </a>
                <a
                  href="/my/profile/local"
                  className="list-group-item list-group-item-action"
                >
                  Local Settings
                </a>

                <a
                  href="/my/profile/addresses"
                  className="list-group-item list-group-item-action"
                >
                  Shipping Addresses
                </a>
              </div>

              <a
                href="/my/profile/shipstation"
                className="list-group-item list-group-item-action"
              >
                ShipStation
              </a>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-9">
          <div className="panel panel-default">
            <div className="panel-heading">Active Listings</div>

            <div className="panel-body">
              You do not have any active listings.
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">Active Sales</div>

            <div className="panel-body">You do not have any active sales.</div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">Purchases</div>

            <div className="panel-body">You do not have any purchases.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PamasZone;

export const getServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
};
