<template>
  <NavBar />
  <main class="PageContent">
    <Hero />
    <Features />
    <BaseSlider :carousel-settings="carouselSettings">
    <PropertyCard
      v-for="(property, index) in carouselSlides"
      :key="index"
      :property="property"
      class="swiper-slide"
    />
    </BaseSlider>
  </main>
  
  
  <Footer />
</template>

<script>
export default {
  data() {
    return {
      carouselSlides: [
        {
          propertyImage: "/images/houses/house1.jpg",
          propertyName: "London",
          propertyRating: "2",
          propertyCopy: "A property in the heart of London",
          propertyCost: "500",
          propertyFrequency: "PP/Night",
        },
        {
          propertyImage: "/images/houses/house2.jpg",
          propertyName: "Newcastle",
          propertyRating: "4.7",
          propertyCopy: "A property in the heart of London",
          propertyCost: "500",
          propertyFrequency: "PP/Night",
        },
        {
          propertyImage: "/images/houses/house3.jpg",
          propertyName: "Glasgow",
          propertyRating: "4",
          propertyCopy: "A property in the heart of London",
          propertyCost: "500",
          propertyFrequency: "PP/Night",
        },
        {
          propertyImage: "/images/houses/house4.jpg",
          propertyName: "Manchester",
          propertyRating: "4.7",
          propertyCopy: "A property in the heart of London",
          propertyCost: "500",
          propertyFrequency: "PP/Night",
        },
        {
          propertyImage: "/images/houses/house1.jpg",
          propertyName: "London",
          propertyRating: "2",
          propertyCopy: "A property in the heart of London",
          propertyCost: "500",
          propertyFrequency: "PP/Night",
        },
        {
          propertyImage: "/images/houses/house2.jpg",
          propertyName: "Newcastle",
          propertyRating: "4.7",
          propertyCopy: "A property in the heart of London",
          propertyCost: "500",
          propertyFrequency: "PP/Night",
        },
        {
          propertyImage: "/images/houses/house3.jpg",
          propertyName: "Glasgow",
          propertyRating: "4",
          propertyCopy: "A property in the heart of London",
          propertyCost: "500",
          propertyFrequency: "PP/Night",
        },
        {
          propertyImage: "/images/houses/house4.jpg",
          propertyName: "Manchester",
          propertyRating: "4.7",
          propertyCopy: "A property in the heart of London",
          propertyCost: "500",
          propertyFrequency: "PP/Night",
        },
      ],
    };
  },
  computer: {
    carouselSettings() {
      return {
        navigation: true,
      };
    },
  },
};
</script>
<style lang="postcss">
@import '../assets//css//mixins/stack.css';
.PageContent {
    @mixin stack var(--spacing-xl);
}
</style>