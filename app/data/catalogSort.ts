export interface CatalogSortOption {
  label: string
  value: string
}

export const catalogSortOptions: CatalogSortOption[] = [
  {
    label: 'дате добавления',
    value: 'date-added',
  },
  {
    label: 'названию: «от А до Я»',
    value: 'name-asc',
  },
  {
    label: 'названию: «от Я до А»',
    value: 'name-desc',
  },
  {
    label: 'цене по возр.',
    value: 'price-asc',
  },
  {
    label: 'цене по убыв.',
    value: 'price-desc',
  },
  {
    label: 'популярности',
    value: 'popularity',
  },
]
