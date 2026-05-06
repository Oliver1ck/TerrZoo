import type { ProductType } from '@custom-types/product'

import freshStep from '@assets/img/freshStep.png'
import furminator from '@assets/img/furminator.png'
import testImg from '@assets/img/productTest.avif'
import royalCanin from '@assets/img/royalCanin.png'
import royalSecond from '@assets/img/royalSecond.png'
import { mockSalesData } from '@data/catalogSales'

export const products: ProductType[] = [
  {
    id: 1,
    name: 'Консервы ROYAL CANIN STERILISED для взрослых кастрированных котов..',
    img: royalCanin,
    images: [royalCanin],
    pricePerUnit: 0.14,
    numberOfPackages: [
      {
        id: 101,
        count: 1,
        unit: 'г',
        value: 85,
        price: 11.9,
      },
    ],
    sales: mockSalesData,
    brand: {
      id: 1,
      title: 'ROYAL CANIN',
    },
    category: {
      id: 1,
      title: 'Корм',
      subcategories: [{ id: 102, categoryId: 1, title: 'Влажный' }],
    },
    description:
      'Полнорационный влажный корм для взрослых кошек с повышенной вкусовой привлекательностью. Подходит для ежедневного кормления и поддержания здорового пищеварения.',
    keyFeatures: [
      'Сбалансированный рацион для повседневного кормления.',
      'Поддержка здорового пищеварения.',
      'Оптимальная вкусовая привлекательность.',
    ],
    guaranteedAnalysis: [
      { name: 'Белки', value: '9 %' },
      { name: 'Жиры', value: '5 %' },
      { name: 'Клетчатка', value: '1,5 %' },
      { name: 'Зола', value: '2 %' },
    ],
    nutritionalAdditives: [
      { name: 'Витамин D3', value: '250 ME' },
      { name: 'Железо', value: '12 мг' },
      { name: 'Цинк', value: '30 мг' },
    ],
    techAdditives: ['Антиоксиданты'],
    ingredients:
      'Мясо и мясные субпродукты, продукты растительного происхождения, масла и жиры, минералы.',
    feedingRecommendations: 'Рекомендации по кормлению: см. упаковку.',
    waterNote: 'Следите, чтобы у питомца всегда была свежая вода.',
  },
  {
    id: 2,
    name: 'FRESH STEP CAT LITTER CLAY EXTREME – Фреш Степ наполнитель..',
    img: freshStep,
    images: [freshStep],
    pricePerUnit: 15.83,
    numberOfPackages: [
      { id: 201, count: 1, unit: 'л', value: 6, price: 95 },
      { id: 202, count: 1, unit: 'л', value: 12, price: 189.96 },
      { id: 203, count: 1, unit: 'л', value: 18, price: 284.94 },
      { id: 204, count: 1, unit: 'л', value: 30, price: 474.9 },
    ],
    sales: mockSalesData,
    brand: {
      id: 2,
      title: 'FRESH STEP',
    },
    category: {
      id: 4,
      title: 'Наполнитель',
      subcategories: [],
    },
    description:
      'Комкующийся наполнитель из глины с контролем запаха. Подходит для кошек любого возраста.',
    keyFeatures: [
      'Быстрое впитывание и надежное комкование.',
      'Контроль запаха до 7 дней.',
      'Минимальное пыление.',
    ],
    guaranteedAnalysis: [],
    nutritionalAdditives: [],
    techAdditives: [],
    ingredients: 'Бентонитовая глина, ароматизирующие компоненты.',
    feedingRecommendations:
      'Насыпьте слой 5–7 см, удаляйте комки ежедневно и досыпайте по мере необходимости.',
    waterNote: 'Хранить в сухом месте, недоступном для детей и животных.',
  },
  {
    id: 3,
    name: 'FURMINATOR SHORT HAIR LARGE CAT M/L Фурминатор для короткошерстных кошек..',
    img: furminator,
    images: [furminator],
    pricePerUnit: 95,
    numberOfPackages: [
      {
        id: 301,
        count: 1,
        unit: 'шт',
        value: 1,
        price: 95,
      },
    ],
    sales: null,
    brand: {
      id: 3,
      title: 'FURMINATOR',
    },
    category: {
      id: 5,
      title: 'Гигиена и уход',
      subcategories: [],
    },
    description:
      'Инструмент для бережного удаления подшерстка у короткошерстных кошек. Уменьшает количество шерсти на мебели и одежде.',
    keyFeatures: [
      'Снижает линьку до 90%.',
      'Не повреждает остевой волос.',
      'Эргономичная ручка для удобства.',
    ],
    guaranteedAnalysis: [],
    nutritionalAdditives: [],
    techAdditives: [],
    ingredients: 'Нержавеющая сталь, пластик, резиновые вставки.',
    feedingRecommendations:
      'Использовать 1–2 раза в неделю по направлению роста шерсти.',
    waterNote: 'После использования очистить и хранить в сухом месте.',
  },
  {
    id: 4,
    name: 'Сухой корм ROYAL CANIN STERILISED 37 для взрослых кастрированных котов и..',
    img: royalSecond,
    images: [royalSecond, royalCanin, testImg],
    pricePerUnit: 110,
    numberOfPackages: [
      { id: 401, count: 1, unit: 'кг', value: 0.2, price: 22 },
      { id: 402, count: 1, unit: 'кг', value: 0.4, price: 44 },
      { id: 403, count: 1, unit: 'кг', value: 1.2, price: 132 },
      { id: 404, count: 1, unit: 'кг', value: 2, price: 220 },
      { id: 405, count: 1, unit: 'кг', value: 4, price: 440 },
      { id: 406, count: 1, unit: 'кг', value: 10, price: 1100 },
    ],
    sales: null,
    brand: {
      id: 1,
      title: 'ROYAL CANIN',
    },
    category: {
      id: 1,
      title: 'Корм',
      subcategories: [{ id: 101, categoryId: 1, title: 'Сухой' }],
    },
    description:
      'Полнорационный сухой корм для кастрированных котов и стерилизованных кошек от 1 до 7 лет. После стерилизации потребности питомца меняются: снижается активность и потребление воды, поэтому важно поддерживать здоровье мочевыделительной системы и контроль веса.',
    keyFeatures: [
      'Контроль веса благодаря умеренному содержанию жиров.',
      'Поддержание здоровья мочевыделительной системы за счет баланса минералов.',
      'Поддержание мышечной массы благодаря высокому содержанию белков.',
      'Обогащен L-карнитином для нормального обмена жиров.',
    ],
    guaranteedAnalysis: [
      { name: 'Белки', value: '37 %' },
      { name: 'Жиры', value: '12 %' },
      { name: 'Клетчатка', value: '6,2 %' },
      { name: 'Минеральные вещества', value: '8,2 %' },
      { name: 'Безазотистые экстрактивные вещества', value: '31,1 %' },
    ],
    nutritionalAdditives: [
      { name: 'Витамин A', value: '19 000 ME' },
      { name: 'Витамин D3', value: '1 000 ME' },
      { name: 'Железо', value: '34 мг' },
      { name: 'Йод', value: '3,4 мг' },
      { name: 'Марганец', value: '44 мг' },
      { name: 'Цинк', value: '131 мг' },
      { name: 'Селен', value: '0,05 мг' },
    ],
    techAdditives: [
      'Клиноптилолит осадочного происхождения – 10 г/кг',
      'Консерванты',
      'Антиоксиданты',
    ],
    ingredients:
      'Дегидратированные белки животного происхождения (птица), изолят растительных белков, пшеница, мука из зерновых культур, растительная клетчатка, животные жиры, гидролизат белков животного происхождения (вкусоароматические добавки), рис, минеральные вещества, рыбий жир, дрожжи и побочные продукты брожения, соевое масло, фруктоолигосахариды, хлорид аммония.',
    feedingRecommendations: 'Рекомендации по кормлению: см. упаковку.',
    waterNote:
      'Следите, чтобы у вашего питомца всегда был доступ к чистой свежей воде.',
  },
  {
    id: 5,
    name: 'Игрушка для кошек TRIXIE мышка плюшевая с мятой',
    img: freshStep,
    images: [freshStep],
    pricePerUnit: 5,
    numberOfPackages: [{ id: 501, count: 1, unit: 'шт', value: 1, price: 5 }],
    sales: null,
    brand: {
      id: 4,
      title: 'TRIXIE',
    },
    category: {
      id: 3,
      title: 'Игрушки',
      subcategories: [],
    },
    description:
      'Мягкая плюшевая игрушка с кошачьей мятой для активных игр и снятия стресса.',
    keyFeatures: [
      'Содержит кошачью мяту.',
      'Подходит для ежедневных игр.',
      'Мягкий безопасный материал.',
    ],
    guaranteedAnalysis: [],
    nutritionalAdditives: [],
    techAdditives: [],
    ingredients: 'Плюш, наполнитель, кошачья мята.',
    feedingRecommendations: 'Использовать под присмотром, при износе заменить.',
    waterNote: 'Не предназначено для употребления в пищу.',
  },
  {
    id: 6,
    name: 'Сухой корм PRO PLAN OptiDigest для взрослых собак средних пород..',
    img: furminator,
    images: [furminator],
    pricePerUnit: 40,
    numberOfPackages: [
      { id: 601, count: 1, unit: 'кг', value: 3, price: 120 },
      { id: 602, count: 1, unit: 'кг', value: 14, price: 560 },
    ],
    sales: mockSalesData,
    brand: {
      id: 5,
      title: 'PRO PLAN',
    },
    category: {
      id: 1,
      title: 'Корм',
      subcategories: [{ id: 101, categoryId: 1, title: 'Сухой' }],
    },
    description:
      'Сухой корм для взрослых собак средних пород с чувствительным пищеварением. Поддерживает здоровье кишечника и качество стула.',
    keyFeatures: [
      'Поддержка пищеварения и микрофлоры.',
      'Оптимальный уровень белка для мышечной массы.',
      'Содержит пребиотики.',
    ],
    guaranteedAnalysis: [
      { name: 'Белки', value: '26 %' },
      { name: 'Жиры', value: '16 %' },
      { name: 'Клетчатка', value: '3 %' },
      { name: 'Зола', value: '7 %' },
    ],
    nutritionalAdditives: [
      { name: 'Витамин A', value: '12 000 ME' },
      { name: 'Витамин D3', value: '800 ME' },
      { name: 'Цинк', value: '120 мг' },
    ],
    techAdditives: ['Антиоксиданты', 'Консерванты'],
    ingredients:
      'Курица, кукуруза, рис, животные жиры, сушеная свекольная пульпа, рыбий жир, минералы.',
    feedingRecommendations: 'Рекомендации по кормлению: см. упаковку.',
    waterNote: 'Обеспечьте питомцу постоянный доступ к воде.',
  },
  {
    id: 7,
    name: 'Лакомство DREAMIES подушечки с курицей для кошек',
    img: royalSecond,
    images: [royalSecond],
    pricePerUnit: 0.07,
    numberOfPackages: [
      { id: 701, count: 1, unit: 'г', value: 60, price: 4.2 },
      { id: 702, count: 1, unit: 'г', value: 140, price: 9.8 },
    ],
    sales: null,
    brand: {
      id: 6,
      title: 'DREAMIES',
    },
    category: {
      id: 2,
      title: 'Лакомства',
      subcategories: [],
    },
    description:
      'Хрустящие подушечки с нежной начинкой для поощрения и игр с кошкой.',
    keyFeatures: [
      'Подходит для поощрения.',
      'Хрустящая текстура и нежная начинка.',
      'Удобная порционная подача.',
    ],
    guaranteedAnalysis: [
      { name: 'Белки', value: '32 %' },
      { name: 'Жиры', value: '20 %' },
      { name: 'Клетчатка', value: '2,5 %' },
      { name: 'Зола', value: '7 %' },
    ],
    nutritionalAdditives: [
      { name: 'Витамин A', value: '5 000 ME' },
      { name: 'Витамин D3', value: '350 ME' },
    ],
    techAdditives: ['Антиоксиданты'],
    ingredients:
      'Мясо и субпродукты, зерновые, масла и жиры, дрожжи, минералы.',
    feedingRecommendations:
      'Давать как лакомство, уменьшая основную порцию корма.',
    waterNote: 'Следите за наличием свежей воды.',
  },
  {
    id: 8,
    name: 'Шампунь 8in1 Perfect Coat Tender Care для щенков',
    img: royalCanin,
    images: [royalCanin],
    pricePerUnit: 0.05,
    numberOfPackages: [
      { id: 801, count: 1, unit: 'мл', value: 473, price: 23.65 },
    ],
    sales: mockSalesData,
    brand: {
      id: 7,
      title: '8in1',
    },
    category: {
      id: 5,
      title: 'Гигиена и уход',
      subcategories: [],
    },
    description:
      'Мягкий шампунь для щенков с деликатным уходом за кожей и шерстью.',
    keyFeatures: [
      'Подходит для чувствительной кожи.',
      'Нежный аромат и бережное очищение.',
      'Легко смывается.',
    ],
    guaranteedAnalysis: [],
    nutritionalAdditives: [],
    techAdditives: [],
    ingredients: 'Вода, мягкие ПАВы, ухаживающие компоненты, ароматизатор.',
    feedingRecommendations:
      'Нанести на влажную шерсть, вспенить, тщательно смыть.',
    waterNote: 'Только для наружного применения.',
  },
  {
    id: 9,
    name: 'Когтеточка TRIXIE столбик с площадкой',
    img: freshStep,
    images: [freshStep],
    pricePerUnit: 45,
    numberOfPackages: [{ id: 901, count: 1, unit: 'шт', value: 1, price: 45 }],
    sales: null,
    brand: {
      id: 4,
      title: 'TRIXIE',
    },
    category: {
      id: 11,
      title: 'Когтеточки',
      subcategories: [],
    },
    description:
      'Когтеточка-столбик с площадкой для отдыха. Помогает защитить мебель и поддерживать когти в хорошем состоянии.',
    keyFeatures: [
      'Устойчивая конструкция.',
      'Натуральное джутовое покрытие.',
      'Площадка для отдыха.',
    ],
    guaranteedAnalysis: [],
    nutritionalAdditives: [],
    techAdditives: [],
    ingredients: 'Дерево, джут, ковролин.',
    feedingRecommendations: 'Разместить в любимом месте питомца.',
    waterNote: 'Регулярно проверяйте крепления.',
  },
  {
    id: 10,
    name: 'Лакомство TITBIT корень бычий для собак',
    img: furminator,
    images: [furminator],
    pricePerUnit: 18,
    numberOfPackages: [{ id: 1001, count: 1, unit: 'шт', value: 1, price: 18 }],
    sales: null,
    brand: {
      id: 8,
      title: 'TITBIT',
    },
    category: {
      id: 2,
      title: 'Лакомства',
      subcategories: [],
    },
    description:
      'Натуральное лакомство для собак, подходит для длительного жевания.',
    keyFeatures: [
      '100% натуральный состав.',
      'Подходит для тренировки челюсти.',
      'Без искусственных добавок.',
    ],
    guaranteedAnalysis: [
      { name: 'Белки', value: '80 %' },
      { name: 'Жиры', value: '5 %' },
      { name: 'Влага', value: '10 %' },
    ],
    nutritionalAdditives: [],
    techAdditives: [],
    ingredients: 'Высушенный корень бычий.',
    feedingRecommendations: 'Давать как лакомство под присмотром.',
    waterNote: 'Обеспечьте доступ к воде.',
  },
  {
    id: 11,
    name: 'Консервы BRIT Premium с говядиной и рубцом для собак',
    img: royalSecond,
    images: [royalSecond],
    pricePerUnit: 0.02,
    numberOfPackages: [
      { id: 1101, count: 1, unit: 'г', value: 400, price: 8 },
      { id: 1102, count: 1, unit: 'г', value: 800, price: 16 },
    ],
    sales: null,
    brand: {
      id: 9,
      title: 'BRIT',
    },
    category: {
      id: 1,
      title: 'Корм',
      subcategories: [{ id: 102, categoryId: 1, title: 'Влажный' }],
    },
    description: 'Влажный корм премиум-класса с говядиной и рубцом для собак.',
    keyFeatures: [
      'Высокая вкусовая привлекательность.',
      'Полнорационный рацион.',
      'Подходит для ежедневного кормления.',
    ],
    guaranteedAnalysis: [
      { name: 'Белки', value: '8 %' },
      { name: 'Жиры', value: '5 %' },
      { name: 'Клетчатка', value: '0,6 %' },
      { name: 'Зола', value: '2,5 %' },
    ],
    nutritionalAdditives: [
      { name: 'Витамин D3', value: '200 ME' },
      { name: 'Цинк', value: '25 мг' },
    ],
    techAdditives: ['Антиоксиданты'],
    ingredients: 'Говядина, рубец, бульон, минералы, витамины.',
    feedingRecommendations: 'Рекомендации по кормлению: см. упаковку.',
    waterNote: 'Свежая вода должна быть доступна постоянно.',
  },
  {
    id: 12,
    name: 'Сумка-переноска STEFAN для кошек и мелких собак..',
    img: royalCanin,
    images: [royalCanin],
    pricePerUnit: 85,
    numberOfPackages: [{ id: 1201, count: 1, unit: 'шт', value: 1, price: 85 }],
    sales: null,
    brand: {
      id: 10,
      title: 'STEFAN',
    },
    category: {
      id: 7,
      title: 'Амуниция, витамины',
      subcategories: [],
    },
    description:
      'Легкая сумка-переноска для кошек и мелких собак с вентиляцией.',
    keyFeatures: [
      'Прочные материалы.',
      'Вентиляционные вставки.',
      'Удобные ручки и ремень.',
    ],
    guaranteedAnalysis: [],
    nutritionalAdditives: [],
    techAdditives: [],
    ingredients: 'Текстиль, пластиковая фурнитура, металлическая сетка.',
    feedingRecommendations: 'Выбирайте размер по весу питомца.',
    waterNote: 'Не оставляйте питомца без присмотра.',
  },
  {
    id: 13,
    name: 'Капли Адвантейдж от блох для кошек и кроликов',
    img: freshStep,
    images: [freshStep],
    pricePerUnit: 87.5,
    numberOfPackages: [
      { id: 1301, count: 1, unit: 'мл', value: 0.4, price: 35 },
      { id: 1302, count: 1, unit: 'мл', value: 0.8, price: 70 },
    ],
    sales: null,
    brand: {
      id: 11,
      title: 'АДВАНТЕЙДЖ',
    },
    category: {
      id: 5,
      title: 'Гигиена и уход',
      subcategories: [],
    },
    description:
      'Капли от блох для кошек и кроликов с удобным нанесением на холку.',
    keyFeatures: [
      'Защита от блох до 4 недель.',
      'Быстрое действие.',
      'Подходит для кошек и кроликов.',
    ],
    guaranteedAnalysis: [],
    nutritionalAdditives: [],
    techAdditives: [],
    ingredients: 'Имидоклоприд, вспомогательные вещества.',
    feedingRecommendations:
      'Наносить на сухую кожу в области холки согласно инструкции.',
    waterNote: 'Избегайте попадания в глаза и рот.',
  },
  {
    id: 14,
    name: 'Лоток SAVIC Iriz с сеткой для кошек',
    img: furminator,
    images: [furminator],
    pricePerUnit: 28,
    numberOfPackages: [{ id: 1401, count: 1, unit: 'шт', value: 1, price: 28 }],
    sales: null,
    brand: {
      id: 12,
      title: 'SAVIC',
    },
    category: {
      id: 9,
      title: 'Туалеты',
      subcategories: [],
    },
    description:
      'Лоток с сеткой для удобной уборки и минимального контакта с наполнителем.',
    keyFeatures: [
      'Простая очистка.',
      'Надежный пластик.',
      'Подходит для большинства наполнителей.',
    ],
    guaranteedAnalysis: [],
    nutritionalAdditives: [],
    techAdditives: [],
    ingredients: 'Пластик.',
    feedingRecommendations: 'Регулярно очищать и промывать теплой водой.',
    waterNote: 'Использовать только по назначению.',
  },
]
