import type { ProductType } from '@custom-types/product'

import { mockBrands } from '@data/catalogBrands'

export function useFilteredProducts(products: ProductType[]) {
  const filterStore = useFilterProducts()
  const { filters } = storeToRefs(filterStore)

  const filteredProducts = computed(() => {
    const selectedBrandTitles = mockBrands
      .filter(brand => filters.value.brands.includes(String(brand.id)))
      .map(brand => brand.title.toLowerCase())

    return products.filter(product => {
      if (filters.value.sales.length > 0 && !product.sales) {
        return false
      }

      const { mainCategory, subCategories } = filters.value.categories

      if (mainCategory && String(product.category.id) !== mainCategory) {
        return false
      }

      if (subCategories.length > 0) {
        const productSubcategoryIds = (
          product.category.subcategories || []
        ).map(sub => String(sub.id))

        if (!subCategories.some(id => productSubcategoryIds.includes(id))) {
          return false
        }
      }

      if (selectedBrandTitles.length > 0) {
        const productName = product.name.toLowerCase()

        if (
          !selectedBrandTitles.some(brandTitle =>
            productName.includes(brandTitle),
          )
        ) {
          return false
        }
      }

      return true
    })
  })

  return {
    filteredProducts,
  }
}
