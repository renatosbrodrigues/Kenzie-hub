import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root{
    --color-primary:#FF577F;
    --color-primary-focus: #FF427F;

    --gray-4: #121214;
    --gray-3: #212529;
    --gray-2: #343B41;
    --gray-1: #868E96;

    --sucess: #3FE864;
    --negative: #E83F5B;

    --title-size: 18px;
    --headline-size: 12px;
    
    --base-radius: 4px;

}


`;
