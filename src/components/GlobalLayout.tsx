import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'

import breakpoints from '~/theme/breakpoints'

import variables from '../theme/variables'

const GlobalStyle = createGlobalStyle`
    ${variables}
    
    html {
      font-size: clamp(16px, calc(1rem + (20 - 16) * ((100vw - var(--bp-mobile)) / (var(--max-width) - var(--bp-mobile)))), 20px);
      min-height: 1vw;
    }
    body{
        background: white;
        width: 100vw;
        overflow-x: hidden;
        transition: background-color var(--transition);
        height: 500vh;
        padding-top: var(--px120);
    }
    body, *{
        font-family: var(--f-primary);
    }
`

interface GlobalLayoutProps {
  children: React.ReactNode
}

const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  return (
    <ThemeProvider theme={breakpoints}>
      <Reset />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default GlobalLayout
