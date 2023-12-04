const { gql, GraphQLClient } = require('graphql-request');

export const queryForTabs = gql`
  query MyQuery {
    price {
      tabs {
        id
        tabTitle
        services {
          title
          price
          id
          description
        }
      }
    }
    benefitList {
      benefit {
        id
        subtitle
        categories {
          id
          category
        }
      }
    }
  }
`;

export const getTabs = () => {
  try {
    const requestHeaders = {
      'Content-Type': 'application/json',
      authorization: `Bearer ${process.env.NEXT_CMS_API_KEY}`,
    };

    const client = new GraphQLClient(process.env.NEXT_CMS_BASE_URL, {
      headers: requestHeaders,
    });

    return client.request(queryForTabs);
  } catch (error) {
    return [];
  }
};
