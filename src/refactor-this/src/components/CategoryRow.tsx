import classNames from "classnames";
import { Row } from "react-bootstrap";
import styled from "styled-components";
import { useQuery } from "react-query";

import { useCategory } from "../App.helpers";
import { StyledCol } from "./CategoryContent";
import { fetchCategoryImages } from "./CategoryRow.helpers";
import ColLoader from "./ColLoader";

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
        <>
          <ColLoader />
          <ColLoader />
          <ColLoader />
        </>
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

const StyledImg = styled.img`
  width: 100%;
  height: 380px;
  object-fit: cover;
`;

export default CategoryRow;
