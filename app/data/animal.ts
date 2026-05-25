import type { AnimalType } from '@custom-types/animal'

import BirdImage from '@assets/img/animals/bird.png'
import CatImage from '@assets/img/animals/cat.png'
import DogImage from '@assets/img/animals/dog.png'
import FishImage from '@assets/img/animals/fish.png'
import MouseImage from '@assets/img/animals/mouse.png'

export const animalList: AnimalType[] = [
  {
    id: 1,
    name: 'Собаки',
    image: DogImage,
    description: 'Описание животного 1',
  },
  {
    id: 2,
    name: 'Кошки',
    image: CatImage,
    description: 'Описание животного 2',
  },
  {
    id: 3,
    name: 'Грызуны',
    image: MouseImage,
    description: 'Описание животного 3',
  },
  {
    id: 4,
    name: 'Птицы',
    image: BirdImage,
    description: 'Описание животного 4',
  },
  {
    id: 5,
    name: 'Рыбы',
    image: FishImage,
    description: 'Описание животного 5',
  },
]
