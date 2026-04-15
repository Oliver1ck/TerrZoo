import type { BasketProductType, ProductType } from '@custom-types/product'

import { useStorage } from '@vueuse/core'
import { defineStore, skipHydrate } from 'pinia'
import * as v from 'valibot'

const basketProductSchema = v.object({
  id: v.number(),
  name: v.string(),
  img: v.string(),
  pricePerUnit: v.number(),
  numberOfPackages: v.array(
    v.object({
      id: v.number(),
      count: v.number(),
      unit: v.picklist(['шт', 'кг', 'г', 'л', 'мл']),
      value: v.number(),
      price: v.number(),
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
      initOnMounted: true,
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

  const removeProductById = (productId: number) => {
    products.value = products.value.filter(p => p.id !== productId)
  }

  const removeProduct = (product: ProductType) => {
    removeProductById(product.id)
  }

  const incrementProductCount = (productId: number) => {
    const product = products.value.find(p => p.id === productId)
    if (product) {
      product.count++
    }
  }

  const decrementProductCount = (productId: number) => {
    const product = products.value.find(p => p.id === productId)
    if (product && product.count > 1) {
      product.count--
    }
  }

  const getProductCount = (productId: number) => {
    const product = products.value.find(p => p.id === productId)
    return product ? product.count : 0
  }

  const setCheckedPackageUnit = (productId: number, unitId: number | null) => {
    const product = products.value.find(p => p.id === productId)
    if (product) {
      product.checkedPackageUnit = unitId
    }
  }

  return {
    products,
    countProducts,
    addProduct,
    removeProductById,
    removeProduct,
    incrementProductCount,
    decrementProductCount,
    getProductCount,
    setCheckedPackageUnit,
  }
})
