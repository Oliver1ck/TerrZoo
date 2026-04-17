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

  const applyRouteFilters = () => {
    if (!isFilterEmpty(filters.value)) {
      return
    }

    const routeFilters = parseQueryToFilters(route.query)

    if (!isFilterEmpty(routeFilters)) {
      filters.value = routeFilters
    }
  }

  if (import.meta.server) {
    applyRouteFilters()
    return
  }

  onMounted(() => {
    // In static hosting, route query is unknown at prerender time,
    // so we apply it only after hydration to keep HTML consistent.
    applyRouteFilters()
  })

  watch(
    () => filters.value,
    activeFilters => {
      if (isQuerySyncedWithFilters(route.query, activeFilters)) {
        return
      }

      router.replace({ query: mapFiltersToQuery(activeFilters) })
    },
    { deep: true },
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

/**
 * Checks if current route query already matches filter state.
 * Prevents redundant router updates and navigation noise.
 */
function isQuerySyncedWithFilters(
  query: LocationQuery,
  filters: Filter,
): boolean {
  const mappedFilters = mapFiltersToQuery(filters)

  return (
    getQueryParamValue(query.category)
    === (mappedFilters.category ? String(mappedFilters.category) : '')
    && getQueryParamValue(query.subcategories)
    === (mappedFilters.subcategories || '')
    && getQueryParamValue(query.sales) === (mappedFilters.sales || '')
    && getQueryParamValue(query.brands) === (mappedFilters.brands || '')
  )
}
