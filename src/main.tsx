import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { SearchPage } from './pages/SearchPage'
import { BookDetailPage } from './pages/BookDetailPage'

import './index.css'

// Activar MSW solo en desarrollo (incluye Vercel si no se fuerza production)
if (import.meta.env.MODE === 'development') {
  const { worker } = await import('./mocks/browser')
  await worker.start()
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/book/:id" element={<BookDetailPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)