import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { Router } from './routes'

export function App() {
  return (
    <ThemeProvider storageKey="@pizzashop:theme">
      <HelmetProvider>
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors />
        <RouterProvider router={Router} />
      </HelmetProvider>
    </ThemeProvider>
  )
}
