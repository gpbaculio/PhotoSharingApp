import axios from "axios";

interface ProjectType {
  category: string;
  name: string;
  url: string;
}

export const fetchCategoryImages = async (page = 1, category: string) => {
  const { data } = await axios.get<ProjectType[]>(
    `http://localhost:8888/images?category=${category}&page=${page}`
  );
  return data;
};
