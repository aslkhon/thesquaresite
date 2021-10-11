/* Common Data Types */

type SectionsQueryResult= {
  data: {
    sections: Array<SectionType>
  }
}

type CategoryType = {
  id: string;
  name: string;
  slug: string;
};

type SectionType = {
  id: string;
  name: string;
  slug: string;
  categories: Array<CategoryType>;
};

type ArticleCardType = {
  slug: string;
  imageSrc: string;
};

type AuthorBlockType = {
  name: string;
  imageSrc: string;
  email: string;
  bio: string;
}

export type {
  SectionsQueryResult, CategoryType, SectionType, ArticleCardType, AuthorBlockType
}