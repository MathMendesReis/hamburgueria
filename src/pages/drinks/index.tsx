import { Head } from "../../components/head";
import { Snacks } from "../../components/snacks";
import { SnackTitle } from "../../components/snaktitle";
import { UseSnacks } from "../../hooks/UseSnacks";

export default function Drink() {


  const { drinks } = UseSnacks()


  return (
    <>
      <Head title='Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks}></Snacks>

    </>
  )
}
