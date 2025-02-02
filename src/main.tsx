import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import GlobalStyle from './style/globalStyle'
import { ErrorBoundary } from 'react-error-boundary'
import FallbackError from './components/fallback/FallbackError'
import FallbackLoading from './components/fallback/FallbackLoading'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ErrorBoundary fallback={<FallbackError/>}>
            <Suspense fallback={<FallbackLoading/>}>
                <GlobalStyle/>
                <App />
            </Suspense>
        </ErrorBoundary>
    </StrictMode>,
)