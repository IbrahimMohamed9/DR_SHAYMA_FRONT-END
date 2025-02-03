import { BookType } from "@/components/molecules/BookCard";
import { ContextType } from "@/types";
import { createContext, useContext } from "react";

const booksContext = createContext<ContextType<BookType, "books"> | null>(null);

const useBooks = () => {
  const context = useContext(booksContext);
  if (!context)
    throw new Error("useBooks must be used within an BooksProvider");

  return context;
};

export default useBooks;
