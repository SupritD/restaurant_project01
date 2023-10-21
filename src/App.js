// import logo from "./logo.svg";
import "./App.css";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Section2 from "./component/Section2";
import Section3 from "./component/Section3";
import Section4 from "./component/Section4";
import Section5 from "./component/Section5";
import Section6 from "./component/Section6";
import Section7 from "./component/Section7";
// import Section1 from "./component/Section1";
// import Section4 from "./component/Section4";
// import Section3 from "./component/Section3";
// import Section2 from "./component/Section2";
// import Section5 from "./component/Section5";
// import Section6 from "./component/Section6";
// import Section7 from "./component/Section7";
// import Footer from "./component/Footer";
// import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section2 />
      {/* <hr /> */}
      <Section3 />
      <Section4 />
      <Section5 />
      {/* <hr /> */}
      <Section6 />
      {/* <hr /> */}
      <Section7 />
      {/* <hr /> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
