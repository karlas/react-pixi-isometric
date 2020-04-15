import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const theme = {
  colors : {
    black : '#191919'
  }
}

const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
  }
  body{
    margin: 0;
    padding: 0;
    min-height: 100%;
    background-color: ${ ({ theme }) => theme.colors.black };
    text-rendering: optimizeLegibility;
    overflow: hidden;
  }
  #root{
    margin: 0;
    height: 100vh;
  }
`

export default ({ children }) => (
  <ThemeProvider theme={ theme }>
    { children }
    <GlobalStyle />
  </ThemeProvider>
)