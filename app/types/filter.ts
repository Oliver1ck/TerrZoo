export interface Filter {
  sales: number[]
  categories: FilterCategories
  brands: number[]
}
export interface FilterCategories {
  mainCategory: number | null
  subCategories: number[]
}
