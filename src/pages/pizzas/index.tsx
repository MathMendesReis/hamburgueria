import { Head } from "../../components/head";
import { Snacks } from "../../components/snacks";
import { SnackTitle } from "../../components/snaktitle";
import { UseSnacks } from "../../hooks/UseSnacks";

export default function Pizza() {


  const {drinks} = UseSnacks()


  return (
    <>
      <Head title='Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={drinks}></Snacks>

    </>
  )

}
