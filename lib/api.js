const POST_GRAPHQL_FIELDS = `
slug
title
coverImage {
  url
}
date
author {
  name
  picture {
    url
  }
}
excerpt
content {
  json
  links {
    assets {
      block {
        sys {
          id
        }
        url
        description
      }
    }
  }
}
`;

export async function fetchGraphQL(query, preview = false) {
  console.log(query);
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/gc0u9xu0uimm/environments/master`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 6aQ1JSw8ycxT58IElSRZNgX6yzW-Z2brNvCvl_ixbX0",
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}
