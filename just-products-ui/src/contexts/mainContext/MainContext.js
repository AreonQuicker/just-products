import { createContext } from 'react';

const MainContext = createContext({
  currentUser: 'TestUser',
});

export default MainContext;
