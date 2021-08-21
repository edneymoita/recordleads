import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['product'] as const

interface ProductCardProps {
  name: string
  src: string
  price: string
  star: number
  launch: boolean
}

const ProductCard: StorefrontFunctionComponent<ProductCardProps> = ({ name, src, price, star, launch = false }) => {
  const handles = useCssHandles(CSS_HANDLES)

  const launchText = launch? "LANÇAMENTO": ""

  return (
    <>
        <div className={`${handles.product} flex flex-column pv1`}>
            <div className={`${handles.product} flex flex-row items-center justify-around`}>
                <h2 className={`${handles.product} c-muted-5 db tc`}>{name}</h2>
                <p>{star} estrelas</p>
            </div>
            <div>
                <img src={src} />
            </div>
            <div className="flex mv3 items-center justify-center">
              <div className="pa3 bg-emphasis">
                {launchText}
              </div>
            </div>
            <div className={`${handles.product} flex flex-row items-center justify-around`}>
              <div className={`${handles.product} c-emphasis db tc`}>
                <h3>R$ {price}</h3>
              </div>
              <div className={`${handles.product} flex mv3 items-center`}>
                <div className="pa3 br2 bg-emphasis">
                  Detalhes
                </div>
              </div>
              <div>
              </div>
            </div>
        </div>
    </>
  )
}

ProductCard.schema = {
  title: 'Produto',
  description: 'Carta do Produto',
  type: 'object',
  properties: {
    productId: {
      title: 'ID do Produto',
      description: 'Identificador do Produto',
      type: 'string',
      default: null,
    },
  },
}

export default ProductCard