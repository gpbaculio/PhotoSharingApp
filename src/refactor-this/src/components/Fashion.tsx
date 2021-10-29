import { createContext, useContext, useEffect, useState } from "react";
import { useQueryClient, useQuery } from "react-query";
import { Container, Row, Col } from "react-bootstrap";
import ContentLoader from "react-content-loader";
import axios from "axios";
import styled from "styled-components";

interface ProjectType {
  category: "fashion";
  name: "fashion_2";
  url: "http://localhost:8888/static/images/fashion/fashion_2.jpeg";
}

async function fetchProjects(page = 1) {
  const { data } = await axios.get<ProjectType[]>(
    "http://localhost:8888/images?category=fashion&page=" + page
  );
  return data;
}

const Fashion = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);

  const { status, data, error, isFetching, isPreviousData } = useQuery(
    ["projects", page],
    () => fetchProjects(page),
    {
      keepPreviousData: true,
      staleTime: 5000,
    }
  );
  console.log("data", data);

  return (
    <>
      <StyledRow className='pt-4'>
        {data?.map(({ url, name }, i) => (
          <StyledCol key={`${i}:${url}`} xs={4}>
            <StyledImg src={url} alt={name} />
          </StyledCol>
        ))}
        {isFetching && (
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
        )}
      </StyledRow>
      <StyledRow>
        {data?.map(({ url, name }, i) => (
          <StyledCol key={`${i}:${url}`} xs={4}>
            <StyledImg src={url} alt={name} />
          </StyledCol>
        ))}
        {isFetching && (
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
        )}
      </StyledRow>
      <StyledRow>
        {data?.map(({ url, name }, i) => (
          <StyledCol key={`${i}:${url}`} xs={4}>
            <StyledImg src={url} alt={name} />
          </StyledCol>
        ))}
        {isFetching && (
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
        )}
      </StyledRow>
    </>
  );
};

const StyledRow = styled(Row)`
  margin-bottom: 20px;
`;
const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 380px;
  object-fit: cover;
`;

export default Fashion;
