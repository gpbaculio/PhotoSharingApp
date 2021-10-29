import { createContext, useContext } from "react";

export const Context = createContext<CategoryContext | null>(null);

export const useCategory = () => {
  const ctx = useContext(Context);
  if (ctx === null) {
    throw new Error("No provider found");
  }
  return ctx;
};

interface CategoryContext {
  category: string;
  page: number;
}

// in real world api provides total items in my exp
export const handleItemsPerPageCount = (category: string) => {
  switch (category) {
    case "fashion":
      return 22;
    case "architecture":
      return 23;
    case "nature":
      return 21;
    default:
      return 22;
  }
};
