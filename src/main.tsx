import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import GlobalStyle from './style/globalStyle'
import { ErrorBoundary } from 'react-error-boundary'
import FallbackError from './components/fallback/FallbackError'
import FallbackLoading from './components/fallback/FallbackLoading'
import { BrowserRouter } from 'react-router-dom'
import { AppStructureProvider } from './components/context/AppStructureContext'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ErrorBoundary fallback={<FallbackError/>}>
            <Suspense fallback={<FallbackLoading/>}>
                <GlobalStyle/>
                <BrowserRouter>
                    <AppStructureProvider>
                        <App />
                    </AppStructureProvider>
                </BrowserRouter>
            </Suspense>
        </ErrorBoundary>
    </StrictMode>,
)