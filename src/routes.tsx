import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import BurguesPage from './pages/burgues'
import PizzasPage from './pages/pizzas'
import DrinksPage from './pages/drinks'
import IceCreamPage from './pages/icecream'



export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<BurguesPage/>}/>
        <Route path='pizzas' element={<PizzasPage/>}/>
        <Route path='icecrean' element={<IceCreamPage/>}/>
        <Route path='drinks' element={<DrinksPage/>}/>

      </Route>
    </Routes>
  )
}
