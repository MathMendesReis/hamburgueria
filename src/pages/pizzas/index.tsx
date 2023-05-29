import { Head } from "../../components/head";
import { Snacks } from "../../components/snacks";
import { SnackTitle } from "../../components/snaktitle";

export default function Pizza() {
  const data = [
    {
      id: 1,
      snack: 'pizza',
      name: 'Calabresa',
      description:
        'Pizza recheada com calabresa, cebola, mussarela, orégano e azeitona, tendo uma borda recheada com catupiry.',
      price: 25,
      image: 'https://i.imgur.com/5rjJGkV.jpg',
    },
    {
      id: 2,
      snack: 'pizza',
      name: 'Portuguesa',
      description:
        'Pizza recheada com presunto, mussarela, ovo, cebola, azeitona, orégano, tomate e molho de tomate, tendo uma borda recheada com catupiry.',
      price: 28.5,
      image: 'https://i.imgur.com/WCoyGoI.png',
    },
  ]
  return (
    <>
      <Head title='Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={data}></Snacks>

    </>
  )

}
