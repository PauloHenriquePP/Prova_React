import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
body {
    margin: 0;
    background-color: #071422;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #AFC2D4;
    font-family: 'Nunito', sans-serif;
}

#root {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
}
`