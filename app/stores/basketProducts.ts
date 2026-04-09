import type { ProductType } from '~/data/product'

import { useStorage } from '@vueuse/core'
import { defineStore, skipHydrate } from 'pinia'
import * as v from 'valibot'

export interface BasketProductType extends ProductType {
  checkedPackageUnit: number | null
  count: number
}

const basketProductSchema = v.object({
  id: v.number(),
  name: v.string(),
  img: v.string(),
  price: v.number(),
  numberOfPackages: v.array(
    v.object({
      id: v.number(),
      count: v.number(),
      unit: v.picklist(['шт', 'кг', 'г', 'л', 'мл']),
    }),
  ),
  sales: v.nullable(
    v.object({
      id: v.number(),
      name: v.string(),
      discount_percentage: v.number(),
      start_date: v.string(),
      end_date: v.string(),
    }),
  ),
  checkedPackageUnit: v.nullable(v.number()),
  count: v.number(),
})

export const useBasketProductsStore = defineStore('basketProducts', () => {
  const products = skipHydrate(
    useStorage<BasketProductType[]>('basketProducts', [], undefined, {
      serializer: {
        read: (value: string) => {
          try {
            const parsed = JSON.parse(value)
            const result = v.safeParse(v.array(basketProductSchema), parsed)

            if (!result.success) {
              console.error(
                'Failed to parse basket products from storage',
                result.issues,
              )
              return []
            }

            return result.output as BasketProductType[]
          } catch {
            return []
          }
        },
        write: (value: BasketProductType[]) => JSON.stringify(value),
      },
    }),
  )
  const countProducts = computed(() => products.value.length)

  const addProduct = (
    product: ProductType,
    checkedPackageUnit: number | null,
    count: number = 1,
  ) => {
    if (!products.value.some(p => p.id === product.id)) {
      products.value.push({ ...product, count, checkedPackageUnit })
    } else {
      products.value.find(p => p.id === product.id)!.count += count
    }
  }

  const removeProduct = (product: ProductType) => {
    products.value = products.value.filter(p => p.id !== product.id)
  }

  return { products, countProducts, addProduct, removeProduct }
})
