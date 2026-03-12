import royalCanin from '@assets/img/brands/belcando.png'
import hills from '@assets/img/brands/brit.png'
import eukanuba from '@assets/img/brands/eukanuba.png'
import whiskas from '@assets/img/brands/foresto.png'
import purina from '@assets/img/brands/purina.png'

export interface BrandType {
  id: number
  name: string
  imageUrl: string
}

export const brandsData: BrandType[] = [
  {
    id: 1,
    name: 'Royal Canin',
    imageUrl: royalCanin,
  },
  {
    id: 2,
    name: 'Purina',
    imageUrl: purina,
  },
  {
    id: 3,
    name: 'Hill’s',
    imageUrl: hills,
  },
  {
    id: 4,
    name: 'Whiskas',
    imageUrl: whiskas,
  },
  {
    id: 5,
    name: 'eukanuba',
    imageUrl: eukanuba,
  }
]
