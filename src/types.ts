/* Common Data Types */

type CategoryType = {
  title: string;
  slug: string;
};

type SectionType = {
  title: string;
  slug: string;
  categories: Array<CategoryType>;
};

export type {
  CategoryType, SectionType
};