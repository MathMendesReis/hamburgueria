import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import BurgesPage from './pages/burgues'
import PizzasPage from './pages/pizzas'
import DrinksPage from './pages/drinks'
import IceCreamPage from './pages/icecream'



export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<BurgesPage/>}/>
        <Route path='pizzas' element={<PizzasPage/>}/>
        <Route path='drinks' element={<DrinksPage/>}/>
        <Route path='ice-crean' element={<IceCreamPage/>}/>

      </Route>
    </Routes>
  )
}
