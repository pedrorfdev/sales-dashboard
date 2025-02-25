import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { darkTheme, GlobalStyle, lightTheme } from './styles'
import App from './App.tsx'
import { ThemeProvider } from 'styled-components'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
)
