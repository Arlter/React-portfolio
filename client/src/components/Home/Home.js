import React from "react";
import "./home.css"; 
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="container-fluid home" id="home"> {/* container-fluid is a bootstrap class which  creates a full width container, spanning the entire width of the viewport */}
        <div className="container home-content"> 
            <h1>
                <Typewriter
                    options={{
                        strings: [
                            "Web Development",
                            "Product Development",
                            "Software Development",
                            "Rapper",
                            "Dancer"
                            ],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h1>
            <p> I only live once</p>
            <span className="view-details-button">View Details</span>
        </div>


    </div>
  );
}

export default Home;