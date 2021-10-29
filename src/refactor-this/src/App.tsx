import { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation, useHistory } from "react-router";
import Pagination from "react-js-pagination";
import queryString from "query-string";

import { CategoryContent, Header } from "./components";
import { Context, handleItemsPerPageCount } from "./App.helpers";

function App() {
  const [page, setPage] = useState(1);
  const { pathname, search } = useLocation();
  const category = pathname.replace("/", "") || "fashion";
  const history = useHistory();

  const changePage = useCallback(
    (newPage) => {
      setPage(newPage);
      history.replace({
        pathname,
        search: new URLSearchParams({ page: newPage }).toString(),
      });
    },
    [setPage, history.replace, pathname]
  );

  useEffect(() => {
    const parsed = queryString.parse(search);
    if (parsed && parsed.page) {
      setPage(Number(parsed.page));
    } else {
      changePage(1);
    }
  }, [search, changePage]);

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
