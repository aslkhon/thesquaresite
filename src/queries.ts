import type { DocumentNode } from "graphql";
import gql from "graphql-tag";

const GET_SECTIONS: DocumentNode = gql`
    query getSections {
        sections {
            id
            name
            slug
            categories {
                id
                name
                slug
            }
        }
    }
`;

const GET_SECTION: DocumentNode = gql`
query getSection($slug: String) {
  sections(where: {slug: $slug}) {
    id
    name
    slug
    description
    image {
      formats
    }
    categories {
      id
      name
      slug
    }
  }
}`;

export { GET_SECTIONS, GET_SECTION }