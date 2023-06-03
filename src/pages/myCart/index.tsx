import { Head } from "../../components/head";
import OderHeader from "../oderHeader";
import { Container } from "./styles";
import { Table } from "./table";



export default function MyCart() {
  return (
    <Container>
      <Head title='carrinho'/>
      <OderHeader/>
      <Table/>
    </Container>
  )
}
