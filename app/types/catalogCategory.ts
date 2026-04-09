export interface Category {
  id: number
  title: string
  subcategories: Subcategory[]
}

export interface Subcategory {
  id: number
  categoryId: number
  title: string
}
