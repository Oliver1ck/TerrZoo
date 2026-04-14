import type { ProductType } from '@custom-types/product'

import freshStep from '@assets/img/freshStep.png'
import furminator from '@assets/img/furminator.png'
import royalCanin from '@assets/img/royalCanin.png'
import royalSecond from '@assets/img/royalSecond.png'
import { mockSalesData } from '@data/catalogSales'

export const products: ProductType[] = [
  {
    id: 1,
    name: 'Консервы ROYAL CANIN STERILISED для взрослых кастрированных котов..',
    img: royalCanin,
    price: 12,
    numberOfPackages: [
      {
        id: 101,
        count: 1,
        unit: 'г',
        value: 85,
        price: 12,
      },
    ],
    sales: mockSalesData,
  },
  {
    id: 2,
    name: 'FRESH STEP CAT LITTER CLAY EXTREME – Фреш Степ наполнитель..',
    img: freshStep,
    price: 95,
    numberOfPackages: [
      { id: 201, count: 1, unit: 'л', value: 6, price: 95 },
      { id: 202, count: 1, unit: 'л', value: 12, price: 95 },
      { id: 203, count: 1, unit: 'л', value: 18, price: 95 },
      { id: 204, count: 1, unit: 'л', value: 30, price: 95 },
    ],
    sales: mockSalesData,
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
        unit: 'шт',
        value: 1,
        price: 95,
      },
    ],
    sales: null,
  },
  {
    id: 4,
    name: 'Сухой корм ROYAL CANIN STERILISED 37 для взрослых кастрированных котов и..',
    img: royalSecond,
    price: 95,
    numberOfPackages: [
      { id: 401, count: 1, unit: 'кг', value: 0.2, price: 95 },
      { id: 402, count: 1, unit: 'кг', value: 0.4, price: 95 },
      { id: 403, count: 1, unit: 'кг', value: 1.2, price: 95 },
      { id: 404, count: 1, unit: 'кг', value: 2, price: 95 },
      { id: 405, count: 1, unit: 'кг', value: 4, price: 95 },
      { id: 406, count: 1, unit: 'кг', value: 10, price: 95 },
    ],
    sales: null,
  },
  {
    id: 5,
    name: 'Игрушка для кошек TRIXIE мышка плюшевая с мятой',
    img: freshStep,
    price: 5,
    numberOfPackages: [{ id: 501, count: 1, unit: 'шт', value: 1, price: 5 }],
    sales: null,
  },
  {
    id: 6,
    name: 'Сухой корм PRO PLAN OptiDigest для взрослых собак средних пород..',
    img: furminator,
    price: 120,
    numberOfPackages: [
      { id: 601, count: 1, unit: 'кг', value: 3, price: 120 },
      { id: 602, count: 1, unit: 'кг', value: 14, price: 120 },
    ],
    sales: mockSalesData,
  },
  {
    id: 7,
    name: 'Лакомство DREAMIES подушечки с курицей для кошек',
    img: royalSecond,
    price: 4,
    numberOfPackages: [
      { id: 701, count: 1, unit: 'г', value: 60, price: 4 },
      { id: 702, count: 1, unit: 'г', value: 140, price: 4 },
    ],
    sales: null,
  },
  {
    id: 8,
    name: 'Шампунь 8in1 Perfect Coat Tender Care для щенков',
    img: royalCanin,
    price: 25,
    numberOfPackages: [
      { id: 801, count: 1, unit: 'мл', value: 473, price: 25 },
    ],
    sales: mockSalesData,
  },
  {
    id: 9,
    name: 'Когтеточка TRIXIE столбик с площадкой',
    img: freshStep,
    price: 45,
    numberOfPackages: [{ id: 901, count: 1, unit: 'шт', value: 1, price: 45 }],
    sales: null,
  },
  {
    id: 10,
    name: 'Лакомство TITBIT корень бычий для собак',
    img: furminator,
    price: 18,
    numberOfPackages: [{ id: 1001, count: 1, unit: 'шт', value: 1, price: 18 }],
    sales: null,
  },
  {
    id: 11,
    name: 'Консервы BRIT Premium с говядиной и рубцом для собак',
    img: royalSecond,
    price: 8,
    numberOfPackages: [
      { id: 1101, count: 1, unit: 'г', value: 400, price: 8 },
      { id: 1102, count: 1, unit: 'г', value: 800, price: 8 },
    ],
    sales: null,
  },
  {
    id: 12,
    name: 'Сумка-переноска STEFAN для кошек и мелких собак..',
    img: royalCanin,
    price: 85,
    numberOfPackages: [{ id: 1201, count: 1, unit: 'шт', value: 1, price: 85 }],
    sales: null,
  },
  {
    id: 13,
    name: 'Капли Адвантейдж от блох для кошек и кроликов',
    img: freshStep,
    price: 35,
    numberOfPackages: [
      { id: 1301, count: 1, unit: 'мл', value: 0.4, price: 35 },
      { id: 1302, count: 1, unit: 'мл', value: 0.8, price: 35 },
    ],
    sales: null,
  },
  {
    id: 14,
    name: 'Лоток SAVIC Iriz с сеткой для кошек',
    img: furminator,
    price: 28,
    numberOfPackages: [{ id: 1401, count: 1, unit: 'шт', value: 1, price: 28 }],
    sales: null,
  },
]
