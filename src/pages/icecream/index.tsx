import { Head } from "../../components/head";
import { Snacks } from "../../components/snacks";
import { SnackTitle } from "../../components/snaktitle";
import { UseSnacks } from "../../hooks/UseSnacks";

export default function IceCream() {


 const {iceCreams} =UseSnacks()

  return (
    <>
      <Head title='Sorvetes' />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={iceCreams}></Snacks>

    </>
  )
}
