import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

    :root {
        ---color-primary: #FF577F;
        ---color-primary-Focus: #FF427F;
        ---color-primary-Negative: #59323F;

        ---grey-0: #F8F9FA;
        ---grey-1: #868E96;
        ---grey-2: #343B41;
        ---grey-3: #212529;
        ---grey-4: #121214;

        --sucess: #3FE864;
        --negative: #E83F5B;
    }
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        background-color: var(---grey-4);
        font-family: 'Inter', sans-serif;
    }

    button {
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`