import { useContext } from "react"
import { AppStructureContext } from "../context/AppStructureContext"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { colors } from "../../style/variables"

const Style = styled.div`
    display:flex;
    flex-direction:column;
    background:${colors.color1};
    padding:.5rem;
    border-radius:3rem;
`

const MenuBar = () => {

    const { appStructure } = useContext(AppStructureContext)
    if (!appStructure) return null

    return (
        <Style>
            {appStructure.pages.map((page)=>(
                <Link key={page.path} to={page.path}>
                    {page.text}
                </Link>
            ))}
        </Style>
    )
}

export default MenuBar