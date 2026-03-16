<script setup lang="ts">
import type { Swiper as SwiperType } from 'swiper'

import { mockReviews } from '~~/app/data/review'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'

import Button from '../Button.vue'
import Typography from '../Typography.vue'

const swiperInstance = ref<SwiperType | null>(null)
const currentSlide = ref(1)
const totalSlides = ref(mockReviews.length)

function onSwiper(swiper: SwiperType) {
  swiperInstance.value = swiper
  currentSlide.value = swiper.activeIndex + 1
}

function onSlideChange(swiper: SwiperType) {
  currentSlide.value = swiper.activeIndex + 1
}

function goToPrev() {
  swiperInstance.value?.slidePrev()
}

function goToNext() {
  swiperInstance.value?.slideNext()
}
</script>

<template>
  <section class="reviews">
    <div class="container">
      <div class="reviews__wrapper">
        <Typography tag="h2" variant="heading-lg" text-align="center">
          Отзывы наших клиентов
        </Typography>
        <Swiper
          class="reviews__slider"
          wrapper-tag="ul"
          wrapper-class="reviews__list"
          @swiper="onSwiper"
          @slide-change="onSlideChange"
        >
          <SwiperSlide
            v-for="review in mockReviews"
            :key="review.id"
            tag="li"
            class="review__item"
          >
            <Review :review="review" />
          </SwiperSlide>
        </Swiper>
        <div class="reviews__control">
          <Button
            variant="control"
            control-variant="secondary"
            @click="goToPrev"
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
                d="M12 16C11.744 16 11.488 15.902 11.293 15.707L6.29301 10.707C5.90201 10.316 5.90201 9.68401 6.29301 9.29301L11.293 4.29301C11.684 3.90201 12.316 3.90201 12.707 4.29301C13.098 4.68401 13.098 5.31601 12.707 5.70701L8.41401 10L12.707 14.293C13.098 14.684 13.098 15.316 12.707 15.707C12.512 15.902 12.256 16 12 16Z"
                fill="#5C5F62"
              />
            </svg>
          </Button>
          <Typography variant="body-md" color="Warning">
            {{ currentSlide }} из {{ totalSlides }}
          </Typography>
          <Button
            variant="control"
            control-variant="secondary"
            @click="goToNext"
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
    </div>
  </section>
</template>

<style lang="scss">
.reviews__wrapper {
  background: var(--Surface-Default);
  border-radius: 0.3125rem;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
}
.reviews__slider {
  padding: 1.5rem 0 1.38rem;
}
.reviews__list {
  display: flex;
}

.review__item {
  display: flex;
  justify-content: center;
}

.reviews__control {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}

.reviews__indicator {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: var(--text-secondary, #5c5f62);
}
</style>
