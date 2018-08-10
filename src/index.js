import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';

let store = createStore(todoApp);

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] }, // Purple and green play nicely together.
    secondary: { main: "#11cb5f" } // This is just green.A700 as hex.
  }
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
