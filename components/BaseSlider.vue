<template>
    <div class="BaseCarousel__container container">
        <h2>Swiper Title</h2>
        <p class="text__small">small Description of the swiper images</p>
        <div ref="carousel" class="swiper-container">
            <div class="swiper-wrapper">
                <slot />
            </div>
            <div class="BaseCarousel__nav">
                <button type="button" class="BaseCarousel__nav__btn BaseCarousel__nav__btn--prev">
                    <BaseIcon use="Chevron"/>
                </button>
                <button type="button" class="BaseCarousel__nav__btn BaseCarousel__nav__btn--next">
                    <BaseIcon use="Chevron"/>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';

export default {
    props: {
        carouselSettings: {
            type: Object, 
            required: true,
        }
    },
    methods: {
        initSwiper() {
            return new Swiper(this.$refs.carousel, {
                grabCursor: true,
                slidesPerView: 1,
                spaceBetween: 30,
                navigation: {
                    nextEl: 'BaseCarousel__nav__btn--next',
                    prevEl: 'BaseCarousel__nav__btn--prev',
                }
            })
        }
    }
}
</script>

<style>
@import '../assets/css/mixins/stack.css';

    .BaseCarousel__container {
        @mixin stack var(--spacing);
    }

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
        rotate: 180deg;
    }
</style>