import type { Promotion } from '@custom-types/promotion'

import catPromo from '@assets/img/promotion/catPromotion.png'
import dogPromo from '@assets/img/promotion/dogPromotion.png'

export const dataPromoStatic: Promotion[] = [
  {
    id: 1,
    img: dogPromo,
    title: 'Скидка 25% на первый заказ любого товара на сумму от 50BYN',
    variant: 'primary',
  },
  {
    id: 2,
    img: catPromo,
    title: 'Получите игрушку в подарок при сумме заказа от 200BYN',
    variant: 'secondary',
  },
]
