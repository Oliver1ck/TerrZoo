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
    pricePerUnit: 0.14,
    numberOfPackages: [
      {
        id: 101,
        count: 1,
        unit: 'г',
        value: 85,
        price: 11.9,
      },
    ],
    sales: mockSalesData,
    category: {
      id: 1,
      title: 'Корм',
      subcategories: [{ id: 102, categoryId: 1, title: 'Влажный' }],
    },
  },
  {
    id: 2,
    name: 'FRESH STEP CAT LITTER CLAY EXTREME – Фреш Степ наполнитель..',
    img: freshStep,
    pricePerUnit: 15.83,
    numberOfPackages: [
      { id: 201, count: 1, unit: 'л', value: 6, price: 95 },
      { id: 202, count: 1, unit: 'л', value: 12, price: 189.96 },
      { id: 203, count: 1, unit: 'л', value: 18, price: 284.94 },
      { id: 204, count: 1, unit: 'л', value: 30, price: 474.9 },
    ],
    sales: mockSalesData,
    category: {
      id: 4,
      title: 'Наполнитель',
      subcategories: [],
    },
  },
  {
    id: 3,
    name: 'FURMINATOR SHORT HAIR LARGE CAT M/L Фурминатор для короткошерстных кошек..',
    img: furminator,
    pricePerUnit: 95,
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
    category: {
      id: 5,
      title: 'Гигиена и уход',
      subcategories: [],
    },
  },
  {
    id: 4,
    name: 'Сухой корм ROYAL CANIN STERILISED 37 для взрослых кастрированных котов и..',
    img: royalSecond,
    pricePerUnit: 110,
    numberOfPackages: [
      { id: 401, count: 1, unit: 'кг', value: 0.2, price: 22 },
      { id: 402, count: 1, unit: 'кг', value: 0.4, price: 44 },
      { id: 403, count: 1, unit: 'кг', value: 1.2, price: 132 },
      { id: 404, count: 1, unit: 'кг', value: 2, price: 220 },
      { id: 405, count: 1, unit: 'кг', value: 4, price: 440 },
      { id: 406, count: 1, unit: 'кг', value: 10, price: 1100 },
    ],
    sales: null,
    category: {
      id: 1,
      title: 'Корм',
      subcategories: [{ id: 101, categoryId: 1, title: 'Сухой' }],
    },
  },
  {
    id: 5,
    name: 'Игрушка для кошек TRIXIE мышка плюшевая с мятой',
    img: freshStep,
    pricePerUnit: 5,
    numberOfPackages: [{ id: 501, count: 1, unit: 'шт', value: 1, price: 5 }],
    sales: null,
    category: {
      id: 3,
      title: 'Игрушки',
      subcategories: [],
    },
  },
  {
    id: 6,
    name: 'Сухой корм PRO PLAN OptiDigest для взрослых собак средних пород..',
    img: furminator,
    pricePerUnit: 40,
    numberOfPackages: [
      { id: 601, count: 1, unit: 'кг', value: 3, price: 120 },
      { id: 602, count: 1, unit: 'кг', value: 14, price: 560 },
    ],
    sales: mockSalesData,
    category: {
      id: 1,
      title: 'Корм',
      subcategories: [{ id: 101, categoryId: 1, title: 'Сухой' }],
    },
  },
  {
    id: 7,
    name: 'Лакомство DREAMIES подушечки с курицей для кошек',
    img: royalSecond,
    pricePerUnit: 0.07,
    numberOfPackages: [
      { id: 701, count: 1, unit: 'г', value: 60, price: 4.2 },
      { id: 702, count: 1, unit: 'г', value: 140, price: 9.8 },
    ],
    sales: null,
    category: {
      id: 2,
      title: 'Лакомства',
      subcategories: [],
    },
  },
  {
    id: 8,
    name: 'Шампунь 8in1 Perfect Coat Tender Care для щенков',
    img: royalCanin,
    pricePerUnit: 0.05,
    numberOfPackages: [
      { id: 801, count: 1, unit: 'мл', value: 473, price: 23.65 },
    ],
    sales: mockSalesData,
    category: {
      id: 5,
      title: 'Гигиена и уход',
      subcategories: [],
    },
  },
  {
    id: 9,
    name: 'Когтеточка TRIXIE столбик с площадкой',
    img: freshStep,
    pricePerUnit: 45,
    numberOfPackages: [{ id: 901, count: 1, unit: 'шт', value: 1, price: 45 }],
    sales: null,
    category: {
      id: 11,
      title: 'Когтеточки',
      subcategories: [],
    },
  },
  {
    id: 10,
    name: 'Лакомство TITBIT корень бычий для собак',
    img: furminator,
    pricePerUnit: 18,
    numberOfPackages: [{ id: 1001, count: 1, unit: 'шт', value: 1, price: 18 }],
    sales: null,
    category: {
      id: 2,
      title: 'Лакомства',
      subcategories: [],
    },
  },
  {
    id: 11,
    name: 'Консервы BRIT Premium с говядиной и рубцом для собак',
    img: royalSecond,
    pricePerUnit: 0.02,
    numberOfPackages: [
      { id: 1101, count: 1, unit: 'г', value: 400, price: 8 },
      { id: 1102, count: 1, unit: 'г', value: 800, price: 16 },
    ],
    sales: null,
    category: {
      id: 1,
      title: 'Корм',
      subcategories: [{ id: 102, categoryId: 1, title: 'Влажный' }],
    },
  },
  {
    id: 12,
    name: 'Сумка-переноска STEFAN для кошек и мелких собак..',
    img: royalCanin,
    pricePerUnit: 85,
    numberOfPackages: [{ id: 1201, count: 1, unit: 'шт', value: 1, price: 85 }],
    sales: null,
    category: {
      id: 7,
      title: 'Амуниция, витамины',
      subcategories: [],
    },
  },
  {
    id: 13,
    name: 'Капли Адвантейдж от блох для кошек и кроликов',
    img: freshStep,
    pricePerUnit: 87.5,
    numberOfPackages: [
      { id: 1301, count: 1, unit: 'мл', value: 0.4, price: 35 },
      { id: 1302, count: 1, unit: 'мл', value: 0.8, price: 70 },
    ],
    sales: null,
    category: {
      id: 5,
      title: 'Гигиена и уход',
      subcategories: [],
    },
  },
  {
    id: 14,
    name: 'Лоток SAVIC Iriz с сеткой для кошек',
    img: furminator,
    pricePerUnit: 28,
    numberOfPackages: [{ id: 1401, count: 1, unit: 'шт', value: 1, price: 28 }],
    sales: null,
    category: {
      id: 9,
      title: 'Туалеты',
      subcategories: [],
    },
  },
]
