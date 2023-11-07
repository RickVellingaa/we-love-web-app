import { request, gql } from "graphql-request";

export const AllBlogs = async () => {
  const query = gql`
    query Blogs {
      blogs {
        titel
        tag
        slug
        id
        lengte
        gastlezer
        datum
        beschrijving
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
