import React, { Fragment } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Fragment>
        <Nav />
        <Main />
        <Footer />
      </Fragment>
    </div>
  );
}

export default App;
