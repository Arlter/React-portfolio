import React from "react";
import Navbar from "./components/Navbar/Navbar"; 
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Testmonial from "./components/Testmonial/Testmonial";
import Subscription from "./components/Subscription/Subscription";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <>   {/* <> is a shorthand for <React.Fragment> */}
      <Navbar />
      <Home />
      <About />
      <Service />
      <Testmonial />
      <Subscription />
      <Footer />
      <ScrollToTop smooth color="white" style={{borderRadius:"90px", backgroundColor:"red"}} />
    </>
  );
}
export default App;