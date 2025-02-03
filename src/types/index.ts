import { ElementType } from "react";
import { Path } from "react-hook-form";

export type PersonInfo = {
  name: string;
  imgSrc?: string;
  email?: string;
};

export type CommentType = PersonInfo & {
  id: number;
  comment: string;
};

export type ArticleType = {
  title: string;
  category: string;
  subcategory: string;
  description: string;
  imgSrc: string;
  createAt: string;
  updateAt: string;
  articleId: string;
};

export type ContextType<T, K extends string> = {
  [P in K]: T[];
} & {
  [S in `set${Capitalize<K>}`]: React.Dispatch<React.SetStateAction<T[]>>;
};

export type PatternValidationType = {
  message: string;
  value: RegExp;
};

export type LengthValidationType = {
  message: string;
  value: number;
};

export type InputFieldType = {
  fieldName: Path<any>;
  required: string;
  type?: string;
  className?: string;
  PrefixIcon?: ElementType;
  OnClickIcon?: () => void;
  ElementBelowField?: ElementType;
  pattern?: PatternValidationType;
  minLength?: LengthValidationType;
  maxLength?: LengthValidationType;
};

export type Volunteer = PersonInfo & {
  title: string;
  whatsappNumber?: string;
};

export type Activity = PersonInfo & {
  description: string;
};
