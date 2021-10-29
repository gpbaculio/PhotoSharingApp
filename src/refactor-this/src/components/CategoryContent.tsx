import { Col } from "react-bootstrap";
import styled from "styled-components";

import CategoryRow from "./CategoryRow";

const CategoryContent = () => {
  return (
    <>
      <CategoryRow row={1} />
      <CategoryRow row={2} />
      <CategoryRow row={3} />
    </>
  );
};

export default CategoryContent;

export const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
`;
