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
    <Row
      className={classNames("mb-4 position-relative", { "mt-4": row === 1 })}>
      {isFetching ? (
        <>
          <ColLoader />
          <ColLoader />
          <ColLoader />
        </>
      ) : (
        data!.map(({ url, name }, i) => {
          console.log("url", url);
          console.log('url.split("33367")[1]', url.split("/static")[1]);
          const urlImg = `${
            process.env.NODE_ENV === "development"
              ? url
              : `https://photo-share-gpb.herokuapp.com/static/${
                  url.split("/static")[1]
                }`
          }`;
          return (
            <StyledCol key={`${i}:${urlImg}`} xs={4}>
              <StyledImg src={urlImg} alt={name} />
              <StyledBtn onClick={() => window.open(url, "_blank")}>
                Download
              </StyledBtn>
            </StyledCol>
          );
        })
      )}
    </Row>
  );
};

const StyledBtn = styled.button`
  width: 100px;
  height: 40px;
  position: absolute;
  top: calc(50% - 20px);
  border: none;
  color: white;
  background-color: black;
  opacity: 0;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 380px;
  object-fit: cover;
  transition: 0.3s;
  &:hover {
    opacity: 0.5;
  }
  &:hover ~ ${StyledBtn} {
    opacity: 1;
  }
`;

export default CategoryRow;
