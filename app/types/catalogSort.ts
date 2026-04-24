export type CatalogSortValue =
  | 'date-added'
  | 'name-asc'
  | 'name-desc'
  | 'price-asc'
  | 'price-desc'
  | 'popularity'

export interface CatalogSortOption {
  label: string
  value: CatalogSortValue
}
