import type { Sales } from '@custom-types/catalogSales'

export interface ProductType {
  id: number
  name: string
  img: string
  pricePerUnit: number
  numberOfPackages: NumberOfPackages[]
  sales: Sales | null
}

export interface NumberOfPackages {
  id: number
  count: number
  unit: 'шт' | 'кг' | 'г' | 'л' | 'мл'
  value: number
  price: number
}

export interface BasketProductType extends ProductType {
  checkedPackageUnit: number | null
  count: number
}
