import { request, gql } from "graphql-request";

export const getSingleBlog = async (slug: string) => {
  const query = gql`
    query singleBlog {
      blog(where: {slug: "${slug}"}) {
        datum
        gastlezer
        beschrijving
        id
        lengte
        slug
        tag
        titel
        samenvatting
        foto {
      url
    }
      }
    }
  `;

  const endpoint =
    "https://eu-west-2.cdn.hygraph.com/content/cloiveek815cl01t74hircxol/master"; // Your Hygraph GraphQL endpoint
  const results = await request(endpoint, query);
  return results;
};
