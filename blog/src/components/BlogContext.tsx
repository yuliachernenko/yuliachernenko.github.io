import { createContext, useContext } from "react";

export const BlogContext = createContext("");

export const usePost = () => useContext(BlogContext);