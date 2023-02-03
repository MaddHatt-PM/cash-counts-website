import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --gray: #808080;
    --indigo: rgb(87, 85, 213);

    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500&display=swap');
  }
`