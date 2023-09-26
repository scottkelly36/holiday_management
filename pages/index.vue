<template>
  <PageContent :page-content="pageContent" />
</template>

<script>
export default {
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
          heading: 'Interested in properties in Newcastle',
          desc: 'Some of the top properties located around the Newcastle',
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
        {
          block: 'FAQ',
          content: {
            heading: 'Your questions, answered',
            accordionItems: [
              {
                accordionHeading: "What are we and how does it work?",
                accordionCopy: "We verify personal profiles and listings to make sharing easy, enjoyable and safe for millions of Hosts and travellers worldwide. Find out more about Us.",
              },
              {
                accordionHeading: "How do I use search filters?",
                accordionCopy: "It’s easy to use our search filters to only show the listings that have the accessibility features you need. Learn more about using search filters and discover more flexible ways to search.",
              },
              {
                accordionHeading: "Do I need to meet my Host?",
                accordionCopy: "Options like self check-in or booking an entire home allow you to interact with your Host mainly through in-app messaging – you can message them anytime if something comes up..",
              },
              {
                accordionHeading: "What if I need to cancel due to a problem with the listing or Host?",
                accordionCopy: "In most cases, you can resolve any issues directly by messaging your Host. If they can't help, simply contact Airbnb within 24 hours of discovering the issue. Learn more",
              },
              {
                accordionHeading: "Need more information?",
                accordionCopy: "Visit our Help Centre to get additional answers to your questions. Learn more",
              },
            ]
          }
        }
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