import { useContext } from "react"
import { AppStructureContext } from "../context/AppStructureContext"
import { Link } from "react-router-dom"

const MenuBar = () => {

    const { appStructure } = useContext(AppStructureContext)
    if (!appStructure) return null

    return (
        <nav>
            {appStructure.pages.map((page)=>(
                <Link key={page.path} to={page.path}>
                    {page.text}
                </Link>
            ))}
        </nav>
    )
}

export default MenuBar