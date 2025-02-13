import { createGlobalStyle } from "styled-components"
import { colors } from "./variables"

const GlobalStyle = createGlobalStyle `
/* font import */
@import url('https://fonts.googleapis.com/css2?family=Archivo+Narrow:ital,wght@0,400..700;1,400..700&family=Rubik:ital,wght@0,300..900;1,300..900&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap');

:root{
    font-family: "Titillium Web", Arial;
    background:${colors.color4};
}
html{
    background-color: var(--color1);
}
body{
    margin: 0;
    width: 100%;
    min-width: 20rem;
    justify-content: center;
}
p{
    margin: 0;
}
a{
    text-decoration: none;
    color: var(--color2);
}
h2{
    margin: 0;
}
h3{
    margin: 0;
}
h4{
    margin: 0;
}
ol{
    margin: 0;
    padding-inline-start: 1rem;
}
ul{
    margin: 0;
    padding-inline-start: 1rem;
}
li{
    margin: .5rem 0;
}
select{
    padding: .1rem 1rem;
    border-radius: .5rem;
    border: solid .15rem grey;
    background: var(--color2);
    color: var(--color1);
    font-family: "Titillium Web", Arial;
    transition: .15s ease-in-out;
    
    &:hover{
        filter: brightness(.9);
        transform: scale(.97);
    }
}
button{
    padding: .2rem 1rem;
    border-radius: .5rem;
    border: solid .15rem var(--color3_dark);
    background: var(--color3_dark);
    color: var(--color2);
    font-family: "Titillium Web", Arial;
    transition: .15s ease-in-out;
    cursor: pointer;
    
    &:hover{
        filter: brightness(.8);
    }
    &:active{
        transform: scale(.95);
    }
}
`

export default GlobalStyle