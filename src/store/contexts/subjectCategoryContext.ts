import { createContext, useContext } from "react";
import { ContextType } from "@/types";

const subjectCategoryContext = createContext<ContextType<
  { [key: string]: string },
  "subjectCategory"
> | null>(null);

const useSubjectCategory = () => {
  const context = useContext(subjectCategoryContext);
  if (!context)
    throw new Error(
      "useSubjectCategory must be used within an SubjectCategoryProvider"
    );

  return context;
};

export default useSubjectCategory;
