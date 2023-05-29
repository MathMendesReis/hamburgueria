import { Head } from "../../components/head";
import { Snacks } from "../../components/snacks";
import { SnackTitle } from "../../components/snaktitle";

export default function Drink() {
  const data = [
    {
      id: 1,
      snack: 'drink',
      name: 'Coca-Cola 2L',
      description: 'A tradicional Coca-Cola que a família brasileira adora.',
      price: 12,
      image: 'https://i.imgur.com/Lg3aKhf.jpg',
    },
    {
      id: 2,
      snack: 'drink',
      name: 'Guaraná Antarctica',
      description: 'O irresistível e saboroso Guaraná Antarctica em sua versão de latinha.',
      price: 6.5,
      image: 'https://i.imgur.com/hOBrOIm.jpg',
    },
    {
      id: 3,
      snack: 'drink',
      name: 'Suco de Abacaxi',
      description:
        'Suco natural de abacaxi com leves incrementos de algumas hortaliças para fortificar sua saúde.',
      price: 8,
      image: 'https://i.imgur.com/VV9qTMh.jpg',
    },
  ]
  return (
    <>
      <Head title='Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={data}></Snacks>

    </>
  )
}
