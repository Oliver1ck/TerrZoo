import type { Filter } from '@custom-types/filter'

export const useFilterProducts = defineStore('filterProducts', () => {
  const router = useRouter()
  const initialFilters: Filter = {
    sales: [],
    categories: {
      mainCategory: null,
      subCategories: [],
    },
    brands: [],
  }

  const filters = ref<Filter>(structuredClone(initialFilters))

  function setFilters(newFilters: Filter) {
    filters.value = newFilters
  }

  function patchFilters(newFilters: Partial<Filter>) {
    filters.value = {
      ...filters.value,
      ...newFilters,
      categories: {
        ...filters.value.categories,
        ...newFilters.categories,
      },
    }
  }

  function resetFilters() {
    filters.value = structuredClone(initialFilters)
    router.replace({ query: {} })
  }

  return {
    filters,
    setFilters,
    patchFilters,
    resetFilters,
  }
})
