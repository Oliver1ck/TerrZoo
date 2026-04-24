import type { ProductType } from '@custom-types/product'

export function useFilteredProducts(products: ProductType[]) {
  const filterStore = useFilterProducts()
  const { filters } = storeToRefs(filterStore)

  const filteredProducts = computed(() => {
    const filtered = products.filter(product => {
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

    switch (filters.value.orderBy) {
      case 'name-asc':
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name, 'ru'))

      case 'name-desc':
        return [...filtered].sort((a, b) => b.name.localeCompare(a.name, 'ru'))

      case 'price-asc':
        return [...filtered].sort((a, b) => a.pricePerUnit - b.pricePerUnit)

      case 'price-desc':
        return [...filtered].sort((a, b) => b.pricePerUnit - a.pricePerUnit)

      case 'popularity':
        return [...filtered].sort(
          (a, b) => Number(Boolean(b.sales)) - Number(Boolean(a.sales)),
        )

      case 'date-added':
        return [...filtered].sort((a, b) => a.id - b.id)

      default:
        return filtered
    }
  })

  return {
    filteredProducts,
  }
}
