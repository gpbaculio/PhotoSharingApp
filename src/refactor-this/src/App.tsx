import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { Architecture, Fashion, Header, Nature } from "./components";

import Pagination from "react-js-pagination";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Container>
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
        </Container>
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
    </QueryClientProvider>
  );
}

export default App;
