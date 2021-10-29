import { createContext, useCallback, useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory, useLocation, useRouteMatch } from "react-router";
import qs from "query-string";
import "./App.css";
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { Architecture, Fashion, Header, Nature } from "./components";

import Pagination from "react-js-pagination";
const Context = createContext<CategoryContext | null>(null);

export const useCategory = () => {
  const ctx = useContext(Context);
  if (ctx === null) {
    throw new Error("No provider found");
  }
  return ctx;
};

interface CategoryContext {
  category: string;
  page: number;
}
function App() {
  const { pathname } = useLocation();
  const category = pathname.replace("/", "") || "fashion";
  const [page, setPage] = useState(1);
  const changePage = useCallback(
    (newPage) => {
      setPage(newPage);
    },
    [setPage]
  );
  return (
    <Context.Provider value={{ page, category }}>
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
        <Pagination
          innerClass='pagination justify-content-center mt-2'
          itemClass='page-item'
          linkClass='page-link'
          activePage={page}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={changePage}
        />
      </Container>
    </Context.Provider>
  );
}

export default App;
