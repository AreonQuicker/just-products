/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Home from '../views/home/Home';
import Header from '../components/Header';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  margin-top: 10px;
`;

const Left = styled.div``;
const Center = styled.div``;
const Right = styled.div``;

function Layout1(props) {
  const { match } = props;
  return (
    <>
      <Header />
      <Container>
        <Left />
        <Center>
          <Switch>
            <Route
              exact
              path={`${match.url}/`}
              render={() => <Redirect to={`${match.url}/home`} />}
            />
            <Route path={`${match.url}/home`} component={Home} />
          </Switch>
        </Center>
        <Right />
      </Container>
    </>
  );
}

export default Layout1;
