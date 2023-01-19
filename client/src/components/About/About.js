import React from "react";
import "./about.css";
import about from "./../../Image/about.jpg";
import { FcAutomotive, FcBiohazard, FcCurrencyExchange } from "react-icons/fc";

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row"> {/* row is a bootstrap class which creates a horizontal row of columns */}
        <div className="col-md-12 col-xl-6 col-lg-6 col-sm-12">
          <div className="about-image">
            <img
              src={about}
              alt="abount_image"
            ></img>
          </div>
        </div>

        <div className="col-md-12 col-xl-6 col-lg-6 col-sm-12">
          <div className="about-details">
            <div className="about-title">
              <h5>About</h5>
              <span className="line"></span>
              <p>
                I am a Msc computer student at UCL, who will graduate in
                September 2023.
              </p>

              <div className="card-design">
                <div className="about-list-item">
                  <div className="about-details-icon">
                    <p>
                      <FcAutomotive size={50} />
                    </p>
                  </div>

                  <div>
                    <h6> Perfect Day </h6>
                    <p> This is a great day in my life</p>
                  </div>
                </div>
              </div>

              <div className="card-design">
                <div className="about-list-item">
                  <div className="about-details-icon">
                    <p>
                      <FcBiohazard size={50} />
                    </p>
                  </div>

                  <div>
                    <h6> Perfect Day </h6>
                    <p> This is a great day in my life</p>
                  </div>
                </div>
              </div>

              <div className="card-design">
                <div className="about-list-item">
                  <div className="about-details-icon">
                    <p>
                      <FcCurrencyExchange size={50} />
                    </p>
                  </div>

                  <div>
                    <h6> Perfect Day </h6>
                    <p> This is a great day in my life</p>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
