import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from 'styled-components';

const muiTheme = createMuiTheme({
  palette: {},
  typography: {
    useNextVariants: true,
  },
});

const theme = {
  main: 'mediumseagreen',
};

function withTheme(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Component {...props} />
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withTheme;
