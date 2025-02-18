/* eslint-disable @typescript-eslint/no-explicit-any */
import { ElementType } from "react";
import { Path } from "react-hook-form";

export type PersonInfo = {
  name: string;
  img?: string;
  email?: string;
};

export type CommentType = PersonInfo & {
  id: number;
  comment: string;
};

export type CategoryType = {
  categoryId: number;
  categoryEn: string;
  categoryAr: string;
};

export type SubcategoryType = {
  categoryId: number;
  subcategoryId: number;
  subcategoryEn: string;
  subcategoryAr: string;
};

export type ArticleType = {
  id: string;
  title: string;
  visitedTimes: number;
  subcategory: SubcategoryType;
  subcategoryId: string;
  description: string;
  img: string;
  imgDescription: string;
  createAt: string;
  updateAt: string;
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
  whatsapp?: string;
  phone: string;
  linkedin?: string;
  position: string;
};

export type Activity = PersonInfo & {
  description: string;
};
