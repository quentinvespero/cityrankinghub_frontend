import styled from "styled-components"
import MenuBar from "./components/menuBar/MenuBar"
import { colors } from "./style/variables"
import AppRouter from "./components/AppRouter"

const Style = styled.div`
    display:flex;
    background:${colors.color1};
    flex-direction:column;
`

const App = () => {
    return (
        <Style className="app">
            <MenuBar />
            <AppRouter />
        </Style>
    )
}

export default App