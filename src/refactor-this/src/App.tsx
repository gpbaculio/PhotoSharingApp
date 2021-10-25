import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components";

import Pagination from "react-js-pagination";

function App() {
  useEffect(() => {
    fetch("http://localhost:8888/images?category=nature")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("result", result);
        },
        (error) => {}
      );
  }, []);
  return (
    <div className='App'>
      <Header />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Edited</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
      <Pagination
        itemClass='page-item'
        linkClass='page-link'
        activePage={1}
        itemsCountPerPage={10}
        totalItemsCount={450}
        pageRangeDisplayed={5}
        onChange={() => {}}
      />
    </div>
  );
}

export default App;
