import { fetchGraphQL } from "lib/api";

const IMAGE_CONTENT_GRAPHQL_FIELDS = `
  name
  desktopImage {
    url
  }
  mobileImage {
    url
  }
`;

function extractHeroImageEntries(fetchResponse) {
  return fetchResponse?.data?.imageContentModelCollection?.items;
}

export async function getHeroImageForHome(preview) {
  const entries = await fetchGraphQL(
    `query {
      imageContentModelCollection{
        items {
          ${IMAGE_CONTENT_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  return extractHeroImageEntries(entries);
}
