<script setup lang="ts">
// import 'swiper/swiper.css'
import type { Swiper as SwiperType } from 'swiper'

import Typography from '~/components/Typography.vue'
import VLink from '~/components/VLink.vue'
import { products } from '~/data/product'
import { Swiper, SwiperSlide } from 'swiper/vue'

const {
  variant = 'primary',
  title = 'Заголовок секции',
  theme = 'gray',
} = defineProps<{
  variant?: 'primary' | 'secondary'
  title?: string
  theme?: 'white' | 'gray'
}>()

const sectionClasses = computed(() => [
  'slider-section',
  `slider-section--${variant}`,
  `slider-section--theme-${theme}`,
])

const swiperInstance = ref<SwiperType | null>(null)

const breakpoints = {
  576: {
    slidesPerView: 2.5,
    spaceBetween: 20,
  },
  992: {
    slidesPerView: 4,
    spaceBetween: 25,
  },
}

function onSwiper(swiper: SwiperType) {
  swiperInstance.value = swiper
}

function slidePrev() {
  swiperInstance.value?.slidePrev()
}

function slideNext() {
  swiperInstance.value?.slideNext()
}
</script>

<template>
  <section :class="sectionClasses">
    <div class="container">
      <div class="slider-section__wrapper">
        <div class="slider-section__controls-wrap">
          <Typography tag="h2" variant="heading-lg">
            {{ title }}
          </Typography>
          <div class="slider-section__controls">
            <Button
              variant="control"
              :control-variant="variant"
              @click="slidePrev"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.9998 16C11.7438 16 11.4878 15.902 11.2928 15.707L6.29276 10.707C5.90176 10.316 5.90176 9.68401 6.29276 9.29301L11.2928 4.29301C11.6838 3.90201 12.3158 3.90201 12.7068 4.29301C13.0978 4.68401 13.0978 5.31601 12.7068 5.70701L8.41376 10L12.7068 14.293C13.0978 14.684 13.0978 15.316 12.7068 15.707C12.5118 15.902 12.2558 16 11.9998 16Z"
                  fill="#5C5F62"
                />
              </svg>
            </Button>
            <Button
              variant="control"
              :control-variant="variant"
              @click="slideNext"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.99976 16C7.74376 16 7.48776 15.902 7.29276 15.707C6.90176 15.316 6.90176 14.684 7.29276 14.293L11.5858 10L7.29276 5.70701C6.90176 5.31601 6.90176 4.68401 7.29276 4.29301C7.68376 3.90201 8.31576 3.90201 8.70676 4.29301L13.7068 9.29301C14.0978 9.68401 14.0978 10.316 13.7068 10.707L8.70676 15.707C8.51176 15.902 8.25576 16 7.99976 16Z"
                  fill="#5C5F62"
                />
              </svg>
            </Button>
          </div>
        </div>
        <Swiper
          class="slider"
          wrapper-tag="ul"
          wrapper-class="slider-list"
          :slides-per-view="1.5"
          :space-between="18"
          :breakpoints="breakpoints"
          :loop="true"
          @swiper="onSwiper"
        >
          <SwiperSlide
            v-for="product in products"
            :key="product.id"
            tag="li"
            :lazy="true"
          >
            <Product :product="product" :variant="variant" />
          </SwiperSlide>
        </Swiper>
        <VLink
          to="/catalog/"
          variant="primary-button"
          size="sm"
          content-position="center"
          position="center"
        >
          Смотреть больше товаров
        </VLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.slider-section__wrapper {
  display: flex;
  flex-direction: column;
}
.slider-section__controls-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.slider-section__controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.swiper {
  overflow: hidden;
}
.slider {
  padding: 1.5rem 0;
}
.slider-list {
  display: flex;
}

.swiper-slide {
  flex-shrink: 0;
}

.slider-section--theme {
  &-white {
    background: var(--Surface-Default);
    padding: 1.5rem 0;
  }
}

@media (max-width: 992px) {
  .slider {
    padding: 1rem 0;
  }
  .slider-section__controls {
    display: none;
  }

  .slider-section--theme {
    &-white {
      padding: 0;
      background: none;
    }
  }
}
</style>
