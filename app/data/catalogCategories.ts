import type { Category } from '@custom-types/catalogCategory'

import { ref } from 'vue'

export const categories = ref<Category[]>([
  {
    id: 1,
    title: 'Корм',
    subcategories: [
      { id: 101, categoryId: 1, title: 'Сухой' },
      { id: 102, categoryId: 1, title: 'Влажный' },
    ],
  },
  {
    id: 2,
    title: 'Лакомства',
    subcategories: [],
  },
  {
    id: 3,
    title: 'Игрушки',
    subcategories: [],
  },
  {
    id: 4,
    title: 'Наполнитель',
    subcategories: [],
  },
  {
    id: 5,
    title: 'Гигиена и уход',
    subcategories: [],
  },
  {
    id: 6,
    title: 'Ветеринарная диета',
    subcategories: [],
  },
  {
    id: 7,
    title: 'Амуниция, витамины',
    subcategories: [],
  },
  {
    id: 8,
    title: 'Миски',
    subcategories: [],
  },
  {
    id: 9,
    title: 'Туалеты',
    subcategories: [],
  },
  {
    id: 10,
    title: 'Домики',
    subcategories: [],
  },
  {
    id: 11,
    title: 'Когтеточки',
    subcategories: [],
  },
])
