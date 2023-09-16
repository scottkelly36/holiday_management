<template>
  <NavBar />
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
  <Footer />
</template>

<script>
export default {
  data() {
    return {
      carouselSlides: [
        {
          propertyImage: "",
          propertyName: "London",
          propertyRating: "2",
          propertyCopy: "A property in the heart of London",
          propertyCost: "500",
          propertyFrequency: "PP/Night",
        },
        {
          propertyImage: "",
          propertyName: "Newcastle",
          propertyRating: "4.7",
          propertyCopy: "A property in the heart of London",
          propertyCost: "500",
          propertyFrequency: "PP/Night",
        },
        {
          propertyImage: "",
          propertyName: "Glasgow",
          propertyRating: "4",
          propertyCopy: "A property in the heart of London",
          propertyCost: "500",
          propertyFrequency: "PP/Night",
        },
        {
          propertyImage: "",
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
</style>