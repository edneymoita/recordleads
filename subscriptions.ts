/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLeads = /* GraphQL */ `
  subscription OnCreateLeads(
    $id: ID
    $Name: String
    $Email: String
    $Phone: String
  ) {
    onCreateLeads(id: $id, Name: $Name, Email: $Email, Phone: $Phone) {
      id
      Name
      Email
      Phone
    }
  }
`;
export const onUpdateLeads = /* GraphQL */ `
  subscription OnUpdateLeads(
    $id: ID
    $Name: String
    $Email: String
    $Phone: String
  ) {
    onUpdateLeads(id: $id, Name: $Name, Email: $Email, Phone: $Phone) {
      id
      Name
      Email
      Phone
    }
  }
`;
export const onDeleteLeads = /* GraphQL */ `
  subscription OnDeleteLeads(
    $id: ID
    $Name: String
    $Email: String
    $Phone: String
  ) {
    onDeleteLeads(id: $id, Name: $Name, Email: $Email, Phone: $Phone) {
      id
      Name
      Email
      Phone
    }
  }
`;
