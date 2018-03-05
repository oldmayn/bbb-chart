import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider'
import theme from './assets/react-toolbox/theme.js'
import './assets/react-toolbox/theme.css'
import './App.css';

import Home from './container/HomeContainer'

const routes = (
  <div>
    <Route exact path="/" component={Home} />
  </div>
)


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
