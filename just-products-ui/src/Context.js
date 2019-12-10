import React, { useContext, useReducer } from 'react';
import MainContext from './contexts/mainContext/MainContext';
import mainReducer from './contexts/mainContext/mainReducer';

function Context(props) {
  const initialState = useContext(MainContext);
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {props.children}
    </MainContext.Provider>
  );
}

export default Context;
