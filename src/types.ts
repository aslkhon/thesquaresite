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

type ArticleCardType = {
  slug: string;
  imageSrc: string;
};

export type {
  CategoryType, SectionType, ArticleCardType
};