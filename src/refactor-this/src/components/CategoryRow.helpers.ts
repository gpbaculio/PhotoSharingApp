import axios from "axios";
import { useQuery } from "react-query";

interface ProjectType {
  category: string;
  name: string;
  url: string;
}

export const fetchCategoryImages = async (page = 1, category: string) => {
  const { data } = await axios.get<ProjectType[]>(
    `https://photo-share-gpb.herokuapp.com:80/images?category=${category}&page=${page}`
  );
  return data;
};

export const useFetchCategoryImages = (category: string, page: number) =>
  useQuery([category, page], () => fetchCategoryImages(page, category), {
    keepPreviousData: true,
    staleTime: Infinity,
  });
