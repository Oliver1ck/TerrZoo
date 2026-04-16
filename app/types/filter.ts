export interface Filter {
  sales: string[]
  categories: FilterCategories
  brands: string[]
}
export interface FilterCategories {
  mainCategory: string | null
  subCategories: string[]
}
