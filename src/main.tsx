import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";

import App from './App.tsx'

const root = document.getElementById('root')

if (root) {
    createRoot(root).render(
        <StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StrictMode>,
    )
} else {
    alert("Element root not found !")
}
