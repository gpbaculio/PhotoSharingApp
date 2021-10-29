import { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation, useHistory } from "react-router";
import Pagination from "react-js-pagination";

import { CategoryContent, Header } from "./components";
import { Context, handleItemsPerPageCount } from "./App.helpers";

function App() {
  const { pathname } = useLocation();
  const category = pathname.replace("/", "") || "fashion";
  const history = useHistory();
  const [page, setPage] = useState(1);
  const changePage = useCallback(
    (newPage) => {
      setPage(newPage);
      history.replace({
        pathname,
        search: `${new URLSearchParams({ test: "test" })}`,
      });
    },
    [setPage, history.replace, pathname]
  );

  useEffect(() => {
    setPage(1);
  }, [pathname, setPage]);

  return (
    <Context.Provider value={{ page, category }}>
      <Header />
      <Container>
        <CategoryContent />
        <Pagination
          innerClass='pagination justify-content-center mt-2'
          itemClass='page-item'
          linkClass='page-link'
          activePage={page}
          itemsCountPerPage={9}
          totalItemsCount={handleItemsPerPageCount(category)}
          pageRangeDisplayed={5}
          onChange={changePage}
        />
      </Container>
    </Context.Provider>
  );
}

export default App;
