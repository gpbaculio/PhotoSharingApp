import classNames from "classnames";
import { Row } from "react-bootstrap";
import styled from "styled-components";

import { useCategory } from "../App.helpers";
import { StyledCol } from "./CategoryContent";
import { useFetchCategoryImages } from "./CategoryRow.helpers";
import ColLoader from "./ColLoader";

interface CategoryRowProps {
  row: number;
}

const CategoryRow = ({ row }: CategoryRowProps) => {
  const { category, page } = useCategory();
  const offset = (page - 1) * 3;
  const { data, isFetching } = useFetchCategoryImages(category, offset + row);
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
  &:hover {
    opacity: 0.5;
  }
`;

export default CategoryRow;
