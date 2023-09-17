<template>
  <div class="BaseCarousel__nav">
    <button
      type="button"
      class="BaseCarousel__nav__btn BaseCarousel__nav__btn--prev"
      @click="swiper.slidePrev()"
    >
      <BaseIcon use="Chevron" />
    </button>
    <button
      type="button"
      class="BaseCarousel__nav__btn BaseCarousel__nav__btn--next"
      @click="swiper.slideNext()"
    >
      <BaseIcon use="Chevron" />
    </button>
  </div>
</template>

<script>
import { useSwiper } from "swiper/vue";

export default {
  setup() {
    const swiper = useSwiper();

    return {
      swiper,
    };
  },
};
</script>

<style>
.BaseCarousel__nav {
  display: flex;
  gap: var(--spacing);
}

.BaseCarousel__nav__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--grey);
  height: 2rem;
  width: 2rem;
  border: none;
  color: var(--black);
  border-radius: 50%;
}

.BaseCarousel__nav__btn--prev {
  transform: rotate(180deg);
}
</style>