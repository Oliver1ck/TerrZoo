import type { CheckedSales, Sales } from '@custom-types/catalogSales'

export const checkedSales: CheckedSales[] = [
  {
    id: 1,
    title: 'Только акционные товары',
  },
]

export const mockSalesData: Sales = {
  id: 1,
  name: 'Черная пятица',
  discount_percentage: 20,
  start_date: '2024-11-29',
  end_date: '2024-11-30',
}
