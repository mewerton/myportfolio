import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./styles/global"

// import {ThemeProvider} from "./Context"

import theme from './styles/theme'

import { App } from './Pages/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
