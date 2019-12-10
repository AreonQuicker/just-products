import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import styled from 'styled-components';
import Apollo from '../Apollo';
import Layout1 from './Layout1';
import Context from '../Context';
import withTheme from '../withTheme';
import './styles.css';

const Container = styled.div``;

function Main() {
  return (
    <Container>
      <Router>
        <Apollo>
          <Context>
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/layout" />} />
              <Route path="/layout" component={Layout1} />
            </Switch>
          </Context>
        </Apollo>
      </Router>
    </Container>
  );
}

export default withTheme(Main);
