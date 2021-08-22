/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLeads = /* GraphQL */ `
  query GetLeads($id: ID!) {
    getLeads(id: $id) {
      id
      Name
      Email
      Phone
    }
  }
`;
export const listLeads = /* GraphQL */ `
  query ListLeads(
    $filter: TableLeadsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLeads(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        Email
        Phone
      }
      nextToken
    }
  }
`;
