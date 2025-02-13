import { FC, useContext } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { AppStructureContext } from "./context/AppStructureContext"
import HomePage from "./pages/HomePage"
import MapPage from "./pages/MapPage"
import SearchPage from "./pages/SearchPage"

// having a record of all page components, so they can be used in the code below
const componentMap: Record<string, FC> = {
    HomePage,
    MapPage,
    SearchPage
}

const AppRouter = () => {

    const { appStructure } = useContext(AppStructureContext)
    if (!appStructure) return null

    return (
        <Routes>
            {appStructure?.pages.map((page) => {
                
                // here PageComponent will be used below with the Record above to map the component based on its name in page object
                const PageComponent = componentMap[page.component]

                return (
                    <Route 
                        key={page.path} 
                        path={page.path}
                        element={<PageComponent/>}
                    />
                )
            }) ?? null}

            <Route path="*" element={<Navigate to="/" replace />}/>

        </Routes>
    )
}

export default AppRouter