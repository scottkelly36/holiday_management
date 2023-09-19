<template>
  <NavBar />
  <PageContent :page-content="pageContent" />
</template>

<script>
import { SwiperSlide } from "swiper/vue";
export default {
  components: {
    SwiperSlide,
  },
  data() {
    return {
      pageContent: [
        {
          block: "Hero",
          content: {
            image: "/images/the_hero_image.jpg",
          },
        },
        {
          block: "Features",
          content: [
            {
              featureIcon: "Shield",
              featureHeading: "Book with confidence",
              featureCopy:
                "Get 24/7 support and discover helpful reviews from our trusted community of guests.",
            },
            {
              featureIcon: "Food",
              featureHeading: "Get the amenities you want",
              featureCopy:
                "Hot tubs, pools, BBQs – explore dozens of great extras that fit your needs.",
            },
            {
              featureIcon: "Calender",
              featureHeading: "Keep it flexible",
              featureCopy:
                "Stays with flexible cancellation make it easy to rebook if your plans change.",
            },
          ],
        },
        {
          block: "BaseSlider",
          child: "PropertyCard",
          content: [
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
@import "../assets//css//mixins/stack.css";
.PageContent {
  @mixin stack var(--spacing-xl);
}
</style>