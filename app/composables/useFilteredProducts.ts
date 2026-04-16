import type { ProductType } from '@custom-types/product'

export function useFilteredProducts(products: ProductType[]) {
  const filterStore = useFilterProducts()
  const { filters } = storeToRefs(filterStore)

  const filteredProducts = computed(() => {
    return products.filter(product => {
      if (filters.value.sales.length > 0 && !product.sales) {
        return false
      }

      const { mainCategory, subCategories } = filters.value.categories

      if (mainCategory && product.category.id !== mainCategory) {
        return false
      }

      if (subCategories.length > 0) {
        const productSubcategoryIds = (
          product.category.subcategories || []
        ).map(sub => sub.id)

        if (!subCategories.some(id => productSubcategoryIds.includes(id))) {
          return false
        }
      }

      if (
        filters.value.brands.length > 0
        && !filters.value.brands.includes(product.brand.id)
      ) {
        return false
      }

      return true
    })
  })

  return {
    filteredProducts,
  }
}
