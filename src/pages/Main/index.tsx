import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar'
import { Container } from './styles'
import { MyOrder } from '../../components/myOder'


import logoImg from '../../assets/logo.svg'

export default function Main() {
  return (
    <Container>
      <Sidebar />
      <section>
        <img src={logoImg} alt="logo" />
        <Outlet/>
      </section>
      <MyOrder/>
    </Container>
  )
}
