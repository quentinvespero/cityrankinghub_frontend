import { createContext, FC, ReactNode, useEffect, useState } from "react"

interface AppStructure {
    pages: Page[]
}

interface Page {
    path: string
    text: string
    icon: string
    component:string
}

interface AppStructureContext {
    appStructure: AppStructure | null
}

export const AppStructureContext = createContext<AppStructureContext>({ appStructure: null })

export const AppStructureProvider: FC<{ children: ReactNode }> = ({ children }) => {

    const [appStructure, setAppStructure] = useState<AppStructure | null>(null)

    useEffect(() => {
        const getAppStructure = async () => {
            try {
                const response = await fetch('/assets/appStructure.json')
                if (!response.ok) throw new Error('---appStructureContext--- : network error')
                const data = await response.json()
                setAppStructure(data)
            }
            catch (error) {
                console.error('---appStructureContext--- : error while fetching appStructure')
            }
        }
        getAppStructure()
    }, [])

    return (
        <AppStructureContext.Provider value={{ appStructure }}>
            {children}
        </AppStructureContext.Provider>
    )
}