import { useEffect, useState } from "react";
import { useQueryClient, useQuery } from "react-query";
import axios from "axios";

async function fetchProjects(page = 1) {
  const { data } = await axios.get(
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
    { keepPreviousData: true, staleTime: 5000 }
  );
  console.log("data", data);
  return <div>Fashion</div>;
};

export default Fashion;
