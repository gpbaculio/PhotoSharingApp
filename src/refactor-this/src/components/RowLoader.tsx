import { StyledCol } from "./CategoryContent";
import ContentLoader from "react-content-loader";

export const RowLoader = () => {
  return (
    <>
      <StyledCol>
        <ContentLoader
          width={"100%"}
          height={380}
          backgroundColor='#f0f0f0'
          foregroundColor='#dedede'>
          <rect width='100%' height='380' />
        </ContentLoader>
      </StyledCol>
      <StyledCol>
        <ContentLoader
          width={"100%"}
          height={380}
          backgroundColor='#f0f0f0'
          foregroundColor='#dedede'>
          <rect width='100%' height='380' />
        </ContentLoader>
      </StyledCol>
      <StyledCol>
        <ContentLoader
          width={"100%"}
          height={380}
          backgroundColor='#f0f0f0'
          foregroundColor='#dedede'>
          <rect width='100%' height='380' />
        </ContentLoader>
      </StyledCol>
    </>
  );
};
