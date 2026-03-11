import freshStep from '@assets/img/freshStep.png'
import furminator from '@assets/img/furminator.png'
import royalCanin from '@assets/img/royalCanin.png'
import royalSecond from '@assets/img/royalSecond.png'

export interface ProductType {
  id: number
  name: string
  img: string
  price: number
  numberOfPackages: NumberOfPackages[]
}

export interface NumberOfPackages {
  id: number
  count: number
  unit: 'шт' | 'кг' | 'г' | 'л' | 'мл'
}

export const products: ProductType[] = [
  {
    id: 1,
    name: 'Консервы ROYAL CANIN STERILISED для взрослых кастрированных котов..',
    img: royalCanin,
    price: 12,
    numberOfPackages: [
      {
        id: 101,
        count: 85,
        unit: 'г'
      }
    ]
  },
  {
    id: 2,
    name: 'FRESH STEP CAT LITTER CLAY EXTREME – Фреш Степ наполнитель..',
    img: freshStep,
    price: 95,
    numberOfPackages: [
      { id: 201, count: 6, unit: 'л' },
      { id: 202, count: 12, unit: 'л' },
      { id: 203, count: 18, unit: 'л' },
      { id: 204, count: 30, unit: 'л' }
    ]
  },
  {
    id: 3,
    name: 'FURMINATOR SHORT HAIR LARGE CAT M/L Фурминатор для короткошерстных кошек..',
    img: furminator,
    price: 95,
    numberOfPackages: [
      {
        id: 301,
        count: 1,
        unit: 'шт'
      }
    ]
  },
  {
    id: 4,
    name: 'Сухой корм ROYAL CANIN STERILISED 37 для взрослых кастрированных котов и..',
    img: royalSecond,
    price: 95,
    numberOfPackages: [
      { id: 401, count: 0.2, unit: 'кг' },
      { id: 402, count: 0.4, unit: 'кг' },
      { id: 403, count: 1.2, unit: 'кг' },
      { id: 404, count: 2, unit: 'кг' },
      { id: 405, count: 4, unit: 'кг' },
      { id: 406, count: 10, unit: 'кг' }
    ]
  },
  {
    id: 5,
    name: 'Игрушка для кошек TRIXIE мышка плюшевая с мятой',
    img: freshStep,
    price: 5,
    numberOfPackages: [
      { id: 501, count: 1, unit: 'шт' }
    ]
  },
  {
    id: 6,
    name: 'Сухой корм PRO PLAN OptiDigest для взрослых собак средних пород..',
    img: furminator,
    price: 120,
    numberOfPackages: [
      { id: 601, count: 3, unit: 'кг' },
      { id: 602, count: 14, unit: 'кг' }
    ]
  },
  {
    id: 7,
    name: 'Лакомство DREAMIES подушечки с курицей для кошек',
    img: royalSecond,
    price: 4,
    numberOfPackages: [
      { id: 701, count: 60, unit: 'г' },
      { id: 702, count: 140, unit: 'г' }
    ]
  },
  {
    id: 8,
    name: 'Шампунь 8in1 Perfect Coat Tender Care для щенков',
    img: royalCanin,
    price: 25,
    numberOfPackages: [
      { id: 801, count: 473, unit: 'мл' }
    ]
  },
  {
    id: 9,
    name: 'Когтеточка TRIXIE столбик с площадкой',
    img: freshStep,
    price: 45,
    numberOfPackages: [
      { id: 901, count: 1, unit: 'шт' }
    ]
  },
  {
    id: 10,
    name: 'Лакомство TITBIT корень бычий для собак',
    img: furminator,
    price: 18,
    numberOfPackages: [
      { id: 1001, count: 1, unit: 'шт' }
    ]
  },
  {
    id: 11,
    name: 'Консервы BRIT Premium с говядиной и рубцом для собак',
    img: royalSecond,
    price: 8,
    numberOfPackages: [
      { id: 1101, count: 400, unit: 'г' },
      { id: 1102, count: 800, unit: 'г' }
    ]
  },
  {
    id: 12,
    name: 'Сумка-переноска STEFAN для кошек и мелких собак..',
    img: royalCanin,
    price: 85,
    numberOfPackages: [
      { id: 1201, count: 1, unit: 'шт' }
    ]
  },
  {
    id: 13,
    name: 'Капли Адвантейдж от блох для кошек и кроликов',
    img: freshStep,
    price: 35,
    numberOfPackages: [
      { id: 1301, count: 0.4, unit: 'мл' },
      { id: 1302, count: 0.8, unit: 'мл' }
    ]
  },
  {
    id: 14,
    name: 'Лоток SAVIC Iriz с сеткой для кошек',
    img: furminator,
    price: 28,
    numberOfPackages: [
      { id: 1401, count: 1, unit: 'шт' }
    ]
  }
]
