import { Col } from "react-bootstrap";
import styled from "styled-components";

import { useCategory } from "../App.helpers";
import CategoryRow from "./CategoryRow";

const CategoryContent = () => {
  const { page } = useCategory();
  const offset = (page - 1) * 3;
  return (
    <>
      <CategoryRow row={1} categoryPage={offset + 1} />
      <CategoryRow row={2} categoryPage={offset + 2} />
      <CategoryRow row={3} categoryPage={offset + 3} />
    </>
  );
};

export const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 380px;
  object-fit: cover;
`;

export default CategoryContent;
