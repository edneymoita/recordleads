import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['recordleads'] as const

interface RecordLeads {
}

const RecordLeads: StorefrontFunctionComponent<RecordLeads> = ({ }) => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <>
        <div className={`${handles.recordleads} flex flex-column mv3 items-center justify-center`}>
          <div className={`${handles.recordleads} flex flex-column mv3 items-center justify-center`}>
            <div className={`${handles.recordleads} c-on-base f4`}>Não fique fora dessa!</div>
            <div className={`${handles.recordleads} c-on-base f5`}>Preencha os campos abaixo e seja o</div>
            <div className={`${handles.recordleads} c-on-base f5`}>primeiro a saber tudo sobre essa mega promoção</div>
          </div>
          <div className={`${handles.recordleads} flex flex-row mv3 justify-around`}>
            <label className={`${handles.recordleads} c-on-base f5`} htmlFor='nameBox'>Nome :</label>
            <input className={`${handles.recordleads} c-on-base f5`} type='text' id='nameBox' placeholder='Fulano'/>
          </div>
          <div className={`${handles.recordleads} flex flex-row mv3 justify-around`}>
            <label className={`${handles.recordleads} c-on-base f5`} htmlFor='emailBox'>E-mail :</label>
            <input className={`${handles.recordleads} c-on-base f5`} type='email' id='emailBox' placeholder='fulano@algumlugar.com.br'/>
          </div>
          <div className={`${handles.recordleads} flex flex-row mv3 justify-around`}>
            <label className={`${handles.recordleads} c-on-base f5`} htmlFor='phoneBox'>Fone :</label>
            <input className={`${handles.recordleads} c-on-base f5`} type='phone' id='phoneBox' placeholder='(99)99999-9999'/>
          </div>
            <button className={`${handles.recordleads} c-on-base f5 pa3 br2 bg-emphasis`}>Faça meu cadastro</button>
        </div>
    </>
  )
}

RecordLeads.schema = {
  title: 'Leads',
  description: 'Registro de Leads',
  type: 'object',
  properties: {
    productId: {
      title: 'email',
      description: 'E-mail do Lead',
      type: 'string',
      default: null,
    },
  },
}

export default RecordLeads