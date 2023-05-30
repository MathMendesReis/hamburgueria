import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'

import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'
import { SnackProvider } from './context/SnackContext'
import { CartProvider } from './context/CartContext'

export default function App() {
  return (
    <BrowserRouter>
      <Theme>
          <SnackProvider>
            <CartProvider>
              <AppRoutes />
              <GlobalStyle />
              <Normalize />
            </CartProvider>
        </SnackProvider>
      </Theme>
    </BrowserRouter>
  )
}
