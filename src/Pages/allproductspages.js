// src/pages/AllProductsPage.js
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/queries';
import ProductList from '../components/ProductList';
import ProductFilter from '../components/ProductFilter';
import Pagination from '../components/Pagination';
import { Container, Typography } from '@mui/material';

const AllProductsPage = () => {
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);

  const { data, loading, error } = useQuery(GET_PRODUCTS, {
    variables: { filters, sort: {}, pagination: { page, limit: 10 } },
  });

  const applyFilters = () => {
    setPage(1);
    refetch();
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  return (
    <Container>
      <ProductFilter filters={filters} setFilters={setFilters} applyFilters={applyFilters} />
      <ProductList products={data.products} />
      <Pagination
        page={page}
        count={Math.ceil(data.products.length / 10)}
        on
