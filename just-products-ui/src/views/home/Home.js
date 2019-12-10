import React from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import ProductCard from '../../components/ProductCard';

const ALL_PRODUCTS = gql`
  query {
    products {
      itemCode
    }
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
`;

function Home() {
  const { loading, error, data } = useQuery(ALL_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Container>
      {data.products && data.products.map(m => <ProductCard />)}
    </Container>
  );
}

export default Home;
