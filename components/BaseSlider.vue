<template>
    <div class="BaseCarousel__container container">
      <h2>Swiper Title</h2>
      <p class="text__small">Small Description of the swiper images</p>
      <swiper :slidesPerView="1"
      :spaceBetween="30"
      :loop="true">
        <slot />
        <SliderNavigation />
      </swiper>
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
import  SliderNavigation  from './SliderNavigation.vue';
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
      SliderNavigation
    },
    data() {
      return {
        swiperParams: {
          slidesPerView: 6,
          spaceBetween: 30
        }
      };
    }
  };
  </script>
  
  <style>
  @import '../assets/css/mixins/stack.css';
  
  .BaseCarousel__container {
      @mixin stack var(--spacing);
      overflow: hidden;
  }

  .swiper-slide {
    width: fit-content !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>