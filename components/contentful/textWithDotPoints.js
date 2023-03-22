import { fetchGraphQL } from "lib/api";

const TEXT_WITH_DOT_POINTS_CONTENT_GRAPHQL_FIELDS = `
  name
  heading
  ctaText
  ctaUrl
  ctaVisible
  body {
    json
  }
  dotPoints {
    json
  }
`;

function extractTextWithDotPointsEntries(fetchResponse) {
  return fetchResponse?.data?.textWithDotPointsCollection?.items;
}

export async function getTextWithDotPointsForHome(preview) {
  const entries = await fetchGraphQL(
    `query {
        textWithDotPointsCollection {
          items {
            name
            heading
            ctaText
            ctaUrl
            ctaVisible
            body {
              json
            }
            dotPoints {
              json
            }
          }
        }
      }`,
    preview
  );
  console.log(entries);
  return extractTextWithDotPointsEntries(entries);
}
