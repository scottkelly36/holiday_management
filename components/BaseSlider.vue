<template>
    <div class="BaseCarousel__container container">
      <h2>Swiper Title</h2>
      <p class="text__small">Small Description of the swiper images</p>
      <swiper :slidesPerView="1"
      :spaceBetween="30"
      :loop="true">
        <SwiperSlide v-for="(slide, index) in content.content" :key="index">
            <component :is="content.child" :content="slide"/>
        </SwiperSlide>
        <SliderNavigation />
      </swiper>
    </div>
  </template>
  
  <script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import  SliderNavigation  from './SliderNavigation.vue';
    import PropertyCard from './PropertyCard.vue';
  
  export default {
    props: {
        content: {
            type: Object,
            required: true,
        },

    },
    components: {
      Swiper,
      SwiperSlide,
      SliderNavigation,
      PropertyCard,
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