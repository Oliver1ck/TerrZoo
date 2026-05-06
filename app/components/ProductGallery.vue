<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    images: string[]
    productName?: string
    mainImageMaxHeight?: string
    thumbImageMaxHeight?: string
  }>(),
  {
    productName: '',
    mainImageMaxHeight: '24.5rem',
    thumbImageMaxHeight: '7rem',
  },
)

const activeImageIndex = ref<number>(0)

const activeImage = computed(() => {
  return props.images[activeImageIndex.value] ?? props.images[0] ?? ''
})

function selectImage(index: number) {
  activeImageIndex.value = index
}

watch(
  () => props.images,
  images => {
    if (!images.length || activeImageIndex.value > images.length - 1) {
      activeImageIndex.value = 0
    }
  },
  { deep: true },
)
</script>

<template>
  <div class="product-gallery">
    <div class="product-gallery__main">
      <ProductImage
        :src="activeImage"
        :alt="productName"
        :max-height="mainImageMaxHeight"
        object-fit="contain"
      />
    </div>
    <div v-if="images.length" class="product-gallery__thumbs">
      <button
        v-for="(imageSrc, index) in images"
        :key="`${imageSrc}-${index}`"
        type="button"
        class="product-gallery__thumb"
        :class="{
          'product-gallery__thumb--active': activeImageIndex === index,
        }"
        :aria-label="`Показать фото ${index + 1}`"
        :aria-pressed="activeImageIndex === index"
        @click="selectImage(index)"
      >
        <ProductImage
          :src="imageSrc"
          :alt="`${productName}. Фото ${index + 1}`"
          :max-height="thumbImageMaxHeight"
          object-fit="cover"
        />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-gallery {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 5.75rem;
  gap: 1rem;
  align-items: start;

  &__main {
    border-radius: 0.75rem;
    background: #fff;
    min-height: 24.5rem;

    & div {
      height: 100%;
    }

    & :deep(img) {
      aspect-ratio: 1 / 1;
    }
  }

  &__thumbs {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__thumb {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 0.25rem;
    border: 2px solid transparent;
    background: #fff;
    cursor: pointer;
    transition: border-color 0.2s ease;

    & div {
      height: 100%;
    }

    &:hover {
      border-color: var(--Icon-Highlight);
    }
  }

  &__thumb--active {
    border-color: var(--Action-Primary-Default);
  }
}

@media (max-width: 992px) {
  .product-gallery {
    gap: 0.6rem;
    grid-template-columns: minmax(17.3rem, 1fr) minmax(3.38rem, 5.75rem);
    &__main {
      min-height: 14rem;
    }
  }
}
</style>
