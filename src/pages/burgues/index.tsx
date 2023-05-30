import { Head } from '../../components/head'
import { SnackTitle } from '../../components/snaktitle'
import { Snacks } from '../../components/snacks'
import { UseSnacks } from '../../hooks/UseSnacks'



export default function Burgers() {


  const { burgers } = UseSnacks()
  return (
    <>
      <Head title='Hambúrgueres' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers}></Snacks>̣
    </>
  )
}
