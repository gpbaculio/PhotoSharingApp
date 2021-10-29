import classNames from "classnames";
import { Row } from "react-bootstrap";
import { useQuery } from "react-query";

import { useCategory } from "../App.helpers";
import { StyledCol, StyledImg } from "./CategoryContent";
import { fetchCategoryImages } from "./CategoryRow.helpers";
import { RowLoader } from "./RowLoader";

interface CategoryRowProps {
  row: number;
  categoryPage: number;
}

const CategoryRow = ({ row, categoryPage }: CategoryRowProps) => {
  const { category } = useCategory();
  const { data, isFetching } = useQuery(
    [category, categoryPage],
    () => fetchCategoryImages(categoryPage, category),
    {
      keepPreviousData: true,
      staleTime: Infinity,
    }
  );
  return (
    <Row className={classNames("mb-4", { "mt-4": row === 1 })}>
      {isFetching ? (
        <RowLoader />
      ) : (
        data!.map(({ url, name }, i) => (
          <StyledCol key={`${i}:${url}`} xs={4}>
            <StyledImg src={url} alt={name} />
          </StyledCol>
        ))
      )}
    </Row>
  );
};

export default CategoryRow;
