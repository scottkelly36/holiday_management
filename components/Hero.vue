<template>
  <section class="TheHero container">
    <HolidayBuilder />
    <img  class="TheHero__img" src="/images/the_hero_image.jpg" alt="">
  </section>
</template>

<script>
export default {

}
</script>

<style>
    .TheHero {
        position: relative;
        display: flex;
        padding-top: var(--spacing-2xl);
        padding-bottom: var(--spacing-lg);
        height: 700px;
    }

    .TheHero__img {
        position: absolute;
        z-index: 1;
        right: 0;
        width: 60%;
        border-radius: 0.8rem;
    }
</style>