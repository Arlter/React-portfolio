import React from "react";
import "./subscription.css";

const Subscription = () => {
  return (
    <div className="container-fluid subscription" id="subscription">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="subscription-title">
                <h5>Subscription Here</h5>
            </div>

            <div className="subscription-form">
                <input type="text" placeholder="Your e-mail"></input>
            </div>

            <div className="subscription-button">
                <span>Subscription</span>
            </div>

            

          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
