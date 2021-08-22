import React, { useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'


const CSS_HANDLES = ['recordleads'] as const

interface RecordLeads {
}


const RecordLeads: StorefrontFunctionComponent<RecordLeads> = ({ }) => {
  
  const handles = useCssHandles(CSS_HANDLES)

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <>
      <div className={`${handles.recordleads} flex flex-column mv3 items-center justify-center`}>
        <div className={`${handles.recordleads} flex flex-column mv3 items-center justify-center`}>
          <div className={`${handles.recordleads} c-on-base f4`}>Não fique fora dessa!</div>
          <div className={`${handles.recordleads} c-on-base f5`}>Seja o primeiro a saber</div>
          <div className={`${handles.recordleads} c-on-base f5`}>tudo sobre essa mega promoção</div>
        </div>
        <div className={`${handles.recordleads} flex flex-row mv3 justify-around`}>
          <input className={`${handles.recordleads} c-on-base f5`} type='text' id='nameBox' placeholder='Nome Completo' onChange={(e) => {setName(e.target.value)}}/>
          </div><div className={`${handles.recordleads} flex flex-row mv3 justify-around`}>
              <input className={`${handles.recordleads} c-on-base f5`} type='email' id='emailBox' placeholder='E-mail'  onChange={(e) => {setEmail(e.target.value)}}/>
            </div><div className={`${handles.recordleads} flex flex-row mv3 justify-around`}>
              <input className={`${handles.recordleads} c-on-base f5`} type='phone' id='phoneBox' placeholder='Telefone' onChange={(e) => {setPhone(e.target.value)}}/>
            </div><button className={`${handles.recordleads} c-on-base--inverted f5 b pa3 bg-emphasis`} onClick={() => {
              if (name != '') {
                let client = {
                  'name': name,
                  'phone': phone,
                  'email': email,
                }

                localStorage.setItem('client', JSON.stringify(client))
              }
            } }>Quero receber info!</button>
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