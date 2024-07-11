// src/graphql/queries.js
import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query GetProducts($filters: ProductFilter, $sort: ProductSort, $pagination: Pagination) {
    products(filters: $filters, sort: $sort, pagination: $pagination) {
      id
      name
      company
      category
      price
      rating
      discount
      availability
      imageUrl
    }
  }
`;

export const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
      id
      name
      company
      category
      price
      rating
      discount
      availability
      imageUrl
    }
  }
`;
