import type { Filter } from '@custom-types/filter'
import type { LocationQuery, LocationQueryValue } from 'vue-router'

/**
 * Synchronizes filter state with URL query parameters.
 * Initializes filters from the current route query if the store is empty.
 */
export function useFilterQuerySync() {
  const filterStore = useFilterProducts()
  const { filters } = storeToRefs(filterStore)
  const route = useRoute()
  const router = useRouter()

  if (isFilterEmpty(filters.value)) {
    const routeFilters = parseQueryToFilters(route.query)

    if (!isFilterEmpty(routeFilters)) {
      filters.value = routeFilters
    }
  }

  watch(
    () => filters.value,
    activeFilters => {
      router.replace({ query: mapFiltersToQuery(activeFilters) })
    },
    { deep: true, immediate: true },
  )
}

/**
 * Converts filter state into router query parameters.
 * Empty filter parts are mapped to `undefined` to remove them from the URL.
 *
 * @param filter - Current filter state.
 * @returns Query object for router navigation.
 */
function mapFiltersToQuery(filter: Filter) {
  return {
    category: filter.categories.mainCategory ?? undefined,
    subcategories: filter.categories.subCategories.join(',') || undefined,
    sales: filter.sales.join(',') || undefined,
    brands: filter.brands.join(',') || undefined,
  }
}

/**
 * Checks whether all filter groups are in their default empty state.
 *
 * @param filter - Filter state to check.
 * @returns `true` when no filters are selected.
 */
function isFilterEmpty(filter: Filter): boolean {
  return (
    filter.sales.length === 0
    && filter.categories.mainCategory === null
    && filter.categories.subCategories.length === 0
    && filter.brands.length === 0
  )
}

/**
 * Normalizes a query parameter value to a single string.
 * If the value is an array, the first element is used.
 *
 * @param value - Query parameter value from the route.
 * @returns Normalized string value.
 */
function getQueryParamValue(
  value: LocationQueryValue | LocationQueryValue[] | undefined,
): string {
  if (Array.isArray(value)) {
    return value[0] ?? ''
  }

  return value ?? ''
}

/**
 * Parses route query parameters into the internal filter state.
 *
 * @param query - Router query object.
 * @returns Parsed filter state.
 */
function parseQueryToFilters(query: LocationQuery): Filter {
  const category = getQueryParamValue(query.category)
  const subcategories = getQueryParamValue(query.subcategories)
  const sales = getQueryParamValue(query.sales)
  const brands = getQueryParamValue(query.brands)

  const mainCategory = +category || null
  const subCategories = subcategories
    ? subcategories.split(',').map(Number)
    : []
  const parsedSales = sales ? sales.split(',').map(Number) : []
  const parsedBrands = brands ? brands.split(',').map(Number) : []

  return {
    sales: parsedSales,
    categories: {
      mainCategory,
      subCategories,
    },
    brands: parsedBrands,
  }
}
