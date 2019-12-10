import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-bottom: 9px solid #333233;
  display: grid;
  grid-template-columns: 300px 1fr 100px;
  grid-template-rows: 1fr;
  color: black;
  background-color: #ffffff;
`;

const Left = styled.div`
  padding-left: 10px;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  justify-items: left;
  align-items: center;
  color: #26bff1;
`;

const Center = styled.div`
  display: grid;
  justify-content: left;
  grid-template-columns: repeat(2, minmax(100px, 150px));
  grid-template-rows: 60px;
`;

const Right = styled.div``;

const LinkItem = styled.div`
  height: 60px;
  cursor: pointer;
  border-left: 1px solid #e9e8e9;
  font-size: 1rem;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
  font-weight: bold;
  color: black;
  &:nth-last-child(1) {
    border-right: 1px solid #e9e8e9;
  }
  &:hover {
    background-color: #26bff1;
    color: white;
  }
`;

const Heading = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  height: 50px;
  padding: 10px;
  background-color: #26bff1;
  color: white;
`;

function Header() {
  return (
    <Container>
      <Left>
        <Heading>JUST PRODUCTS</Heading>
      </Left>
      <Center>
        <LinkItem>Products</LinkItem>
        <LinkItem>Cart</LinkItem>
      </Center>
      <Right />
    </Container>
  );
}

export default Header;
