import { Form } from "react-router-dom";
import { Head } from "../../components/head";
import OderHeader from "../oderHeader";
import { Container, Formulario } from "./styles";

export default function PagamentPage() {
  return <Container>
    <Head title="pagamento"/>
    <OderHeader/>
    <main>
      <Formulario>
        <h4>Informações pessoais</h4>
        <div className="field">
          <label htmlFor="full-name">Nome e sobrenome</label>
          <input type="text" id="full-name" name="full-name" autoComplete="name" />
        </div>

        <div className="grouped">
          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" autoComplete="email" />
          </div>
          <div className="field">
            <label htmlFor="phone">Telefone</label>
            <input type="tel" id="phone" name="phone" autoComplete="phone" />
          </div>
          <div className="field">
            <label htmlFor="document">CPF/CNPJ</label>
            <input type="document" id="document" name="document"/>
          </div>
        </div>
        <h4>Endereço de entrega</h4>
        <div className="grouped">
          <div className="field">
            <label htmlFor="cep">cep</label>
            <input type="text" id="cep" name="cep" autoComplete="cep"
            style={{width:"120px"}} />
          </div>
        </div>
        <div className="grouped">
          <div className="field">
            <label htmlFor="street">Endereço</label>
            <input type="text" name="street" id="street" />
          </div>
          </div>
          <div className="grouped">
          <div className="field">
            <label htmlFor="number">numero</label>
            <input type="text" name="number" id="number" />
          </div>
          <div className="field">
            <label htmlFor="complemento">complemento</label>
            <input type="text" name="complemento" id="complemento" />
          </div>
          </div>
          <div className="grouped">
          <div className="field">
            <label htmlFor="cidade">cidade</label>
            <input type="text" name="cidade" id="cidade" />
          </div>
          <div className="field">
            <label htmlFor="bairro">bairro</label>
            <input type="text" name="bairro" id="bairro" />
          </div>
          <div className="field">
            <label htmlFor="estado">Estado</label>
            <select name="estado" id="estado">
              <option value="">Selecione</option>
              <option value="RJ">Rio de Janeiro</option>
            </select>
          </div>
          </div>
      </Formulario>
    </main>


  </Container>
}
