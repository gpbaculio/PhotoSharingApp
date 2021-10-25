import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Architecture, Fashion, Header, Nature } from "./components";

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
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/(fashion)?'>
            <Fashion />
          </Route>
          <Route exact path='/architecture'>
            <Architecture />
          </Route>
          <Route exact path='/nature'>
            <Nature />
          </Route>
        </Switch>
        {/* <Pagination
        itemClass='page-item'
        linkClass='page-link'
        activePage={1}
        itemsCountPerPage={10}
        totalItemsCount={450}
        pageRangeDisplayed={5}
        onChange={() => {}}
      /> */}
      </Router>
    </Container>
  );
}

export default App;
