export interface CheckedSales {
  id: number
  title: string
}

export const checkedSales: CheckedSales[] = [
  {
    id: 1,
    title: 'Только акционные товары',
  },
]

export interface Sales {
  id: number
  name: string
  discount_percentage: number
  start_date: string
  end_date: string
}

export const mockSalesData: Sales = {
  id: 1,
  name: 'Черная пятица',
  discount_percentage: 20,
  start_date: '2024-11-29',
  end_date: '2024-11-30',
}
