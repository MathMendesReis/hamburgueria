import { Head } from "../../components/head";
import OderHeader from "../oderHeader";
import { Container, Formulario } from "./styles";
import { ConfirmePayment } from "../../components/confirmePayment";
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { schema,FieldValues } from "./validationSchemma";
import { UseCarts } from "../../hooks/UseCart";
import { CustomerData } from "../../interfaces/customerData";
import InputMask from 'react-input-mask';






export default function PagamentPage() {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(schema),
  })
  const onSubmit: SubmitHandler<FieldValues> = (data) => PayOder(data as CustomerData)
  const {PayOder} = UseCarts()


  return <Container>
    <Head title="pagamento"/>
    <OderHeader/>
    <main>
      <Formulario onSubmit={handleSubmit(onSubmit)}>
        <h4>Informações pessoais</h4>
        <div className="field">
          <label htmlFor="fullname">Nome e sobrenome</label>
          <Controller
              name='fullName'
              control={control}
              render={({ field }) => (
                <input type='text' id='fullName' autoComplete='name' {...field} />
              )}
            />

            {errors.fullName && <p className='error'>{errors.fullName.message}</p>}
        </div>

        <div className="grouped">
          <div className="field">
          <label htmlFor="email">E-mail</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
            <input type='text' id='fullName' autoComplete='name' {...field} />
            )}
            />
          {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="field">
            <label htmlFor='mobile'>Celular</label>
              <Controller
                name='mobile'
                control={control}
                render={({ field }) => (
                  <InputMask
                    type='tel'
                    id='mobile'
                    autoComplete='phone'
                    mask='(99) 99999-9999'
                    maskChar='_'
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />

                )}
              />
           {errors.mobile && <p className="error">{errors.mobile.message}</p>}
          </div>

          <div className="field">
            <label htmlFor="document">CPF/CNPJ</label>
            <Controller
              name='document'
              control={control}
              render={({ field }) => (
                <InputMask
                type='text'
                id='cpf'
                autoComplete='off'
                mask='999.999.999-99'
                maskChar='_'
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
            />
            {errors.document && <p className='error'>{errors.document.message}</p>}

          </div>
        </div>
        <h4>Endereço de entrega</h4>
        <div className="grouped">
          <div className="field">
            <label htmlFor="cep">cep</label>
            <Controller
            name="zipCode"
            control={control}
            render={({ field }) => (
            <InputMask
            type="text"
            id="zipCode"
            placeholder=""
            mask="99999-999"
            {...field}
            style={{ width: "120px" }}
            />
            )}
            />
            {errors.zipCode && <p className='error'>{errors.zipCode.message}</p>}

          </div>
        </div>
        <div className="grouped">
          <div className="field">
            <label htmlFor="street">Rua</label>
            <Controller
            name="street"
            control={control}
            render={({ field }) => (
            <input type="text" id="street" {...field}
             />
            )}
            />
            {errors.street && <p>{errors.street.message}</p>}
          </div>
          </div>
          <div className="grouped">
          <div className="field">
            <label htmlFor="number">numero</label>
            <Controller
              name="number"
              control={control}
              render={({ field }) => (
                 <input type="text"{...field} id="number" />
              )}
            />
            {errors.number && <p>{errors.number.message}</p>}
          </div>
          <div className="field">
            <label htmlFor="complemento">complemento</label>
            <Controller
            name="complement"
            control={control}
            render={({ field }) => (
              <input type="text" id="complemento"  {...field} />
            )}
            />
            {errors.complement && <p>{errors.complement.message}</p>}

          </div>
          </div>
          <div className="grouped">
          <div className="field">
            <label htmlFor="cidade">cidade</label>
            <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <input type="text" {...field} id="city" />
            )}
            />
            {errors.city && <p>{errors.city.message}</p>}
          </div>
          <div className="field">
            <label htmlFor="bairro">bairro</label>
            <Controller
            name="neighborhood"
            control={control}
            render={({ field }) => (
              <input type="text" {...field} id="neighborhood" />
            )}
            />
            {errors.neighborhood && <p>{errors.neighborhood.message}</p>}
          </div>
          <div className="field">
            <label htmlFor="estado">Estado</label>
            <Controller
            name="state"
            control={control}
            render={({ field }) => (
            <select {...field} id="estado">
              <option value="">Selecione</option>
              <option value="RJ">Rio de Janeiro</option>
            </select>
            )}
            />
            {errors.neighborhood && <p>{errors.neighborhood.message}</p>}
          </div>
          </div>
        <h4>Pagamento</h4>
        <div className="field">
          <label htmlFor="number-cart">Numero do cartao</label>
          <Controller
          name='creditCardNumber'
          control={control}
          render={({field})=>(
            <InputMask
              type="text"
              id="number-cart"
              mask='9999 9999 9999 9999'
              {...field} />
          )}
          />
            {errors.creditCardNumber && <p>{errors.creditCardNumber.message}</p>}

        </div>
        <div className="field">
          <label htmlFor="creditCardHolder">Nome impresso no cartão</label>
          <Controller
          name='creditCardHolder'
          control={control}
          render={({field})=>(

            <input type="text" id="creditCardHolder" {...field} />
          )}
          />
            {errors.creditCardHolder && <p>{errors.creditCardHolder.message}</p>}
        </div>
        <div className="grouped">
        <div className="field">
          <label htmlFor="creditCardExpiration">Validade(MM/AA)</label>
          <Controller
          name='creditCardExpiration'
          control={control}
          render={({field})=>(
            <InputMask type="text" id="creditCardExpiration" mask='99/99' {...field} />
          )}
          />
            {errors.creditCardExpiration && <p>{errors.creditCardExpiration.message}</p>}
        </div>
        <div className="field">
          <label htmlFor="creditCardSecurityCode">Codigo de segurança(CVV)</label>
          <Controller
          name='creditCardSecurityCode'
          control={control}
          render={({field})=>(
            <InputMask type="text" id="creditCardSecurityCode" mask='999'{...field} />
          )}
          />
            {errors.creditCardSecurityCode && <p>{errors.creditCardSecurityCode.message}</p>}
        </div>
        </div>
      <ConfirmePayment/>
      </Formulario>
    </main>


  </Container>
}
