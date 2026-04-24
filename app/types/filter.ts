import type { CatalogSortValue } from '@custom-types/catalogSort'

export interface Filter {
  sales: number[]
  categories: FilterCategories
  brands: number[]
  orderBy: CatalogSortValue | null
}
export interface FilterCategories {
  mainCategory: number | null
  subCategories: number[]
}
