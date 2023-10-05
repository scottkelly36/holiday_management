<template>
  <Filters />
  <div class="Location__heading container">
    <h1>properties in {{ location }}</h1>
  </div>
  <PropertyGrid :properties="filteredProperties" />
</template>

<script>
export default {
  data() {
    return {
      properties: [
        {
          propertyImage: "/images/houses/house1.jpg",
          propertyName: "London",
          propertyLocation: "London",
          propertyRating: "2",
          propertyCopy: "A property in the heart of London",
          propertyCost: "500",
          propertyFrequency: "PP/Night",
          feature: {
            hasPool: true,
            hasTv: true,
            localFood: true,
            isRural: false,
            wheelchairAccessible: false,
            isCity: true,
            hasTransport: false,
          },
        },
        {
          propertyImage: "/images/houses/house2.jpg",
          propertyName: "Newcastle",
          propertyLocation: "Newcastle",
          propertyRating: "4.7",
          propertyCopy: "A property in the heart of London",
          propertyCost: "500",
          propertyFrequency: "PP/Night",
          feature: {
            hasPool: false,
            hasTv: true,
            localFood: true,
            isRural: false,
            wheelchairAccessible: false,
            isCity: true,
            hasTransport: false,
          },
        },
        {
          propertyImage: "/images/houses/house3.jpg",
          propertyName: "Glasgow",
          propertyLocation: "Glasgow",
          propertyRating: "4",
          propertyCopy: "A property in the heart of London",
          propertyCost: "500",
          propertyFrequency: "PP/Night",
          feature: {
            hasPool: true,
            hasTv: true,
            localFood: true,
            isRural: true,
            wheelchairAccessible: false,
            isCity: false,
            hasTransport: false,
          },
        },
        {
          propertyImage: "/images/houses/house4.jpg",
          propertyName: "Manchester",
          propertyLocation: "Manchester",
          propertyRating: "4.7",
          propertyCopy: "A property in the heart of London",
          propertyCost: "500",
          propertyFrequency: "PP/Night",
          feature: {
            hasPool: true,
            hasTv: true,
            localFood: true,
            isRural: false,
            wheelchairAccessible: true,
            isCity: true,
            hasTransport: false,
          },
        },
        {
          propertyImage: "/images/houses/house1.jpg",
          propertyName: "London",
          propertyLocation: "London",
          propertyRating: "2",
          propertyCopy: "A property in the heart of London",
          propertyCost: "500",
          propertyFrequency: "PP/Night",
          feature: {
            hasPool: false,
            hasTv: false,
            localFood: true,
            isRural: false,
            wheelchairAccessible: false,
            isCity: true,
            hasTransport: false,
          },
        },
        {
          propertyImage: "/images/houses/house2.jpg",
          propertyName: "Newcastle",
          propertyLocation: "Newcastle",
          propertyRating: "4.7",
          propertyCopy: "A property in the heart of London",
          propertyCost: "500",
          propertyFrequency: "PP/Night",
          feature: {
            hasPool: true,
            hasTv: true,
            localFood: true,
            isRural: false,
            wheelchairAccessible: false,
            isCity: true,
            hasTransport: false,
          },
        },
        {
          propertyImage: "/images/houses/house3.jpg",
          propertyName: "Glasgow",
          propertyLocation: "Glasgow",
          propertyRating: "4",
          propertyCopy: "A property in the heart of London",
          propertyCost: "500",
          propertyFrequency: "PP/Night",
          feature: {
            hasPool: true,
            hasTv: true,
            localFood: true,
            isRural: false,
            wheelchairAccessible: false,
            isCity: true,
            hasTransport: false,
          },
        },
        {
          propertyImage: "/images/houses/house4.jpg",
          propertyName: "Manchester",
          propertyLocation: "Manchester",
          propertyRating: "4.7",
          propertyCopy: "A property in the heart of London",
          propertyCost: "500",
          propertyFrequency: "PP/Night",
          feature: {
            hasPool: true,
            hasTv: true,
            localFood: true,
            isRural: false,
            wheelchairAccessible: false,
            isCity: true,
            hasTransport: false,
          },
        },
        {
          propertyImage: "/images/houses/house3.jpg",
          propertyName: "Glasgow",
          propertyLocation: "Glasgow",
          propertyRating: "4",
          propertyCopy: "A property in the heart of London",
          propertyCost: "500",
          propertyFrequency: "PP/Night",
          feature: {
            hasPool: true,
            hasTv: true,
            localFood: true,
            isRural: false,
            wheelchairAccessible: false,
            isCity: true,
            hasTransport: false,
          },
        },
        {
          propertyImage: "/images/houses/house4.jpg",
          propertyName: "Manchester",
          propertyLocation: "Manchester",
          propertyRating: "4.7",
          propertyCopy: "A property in the heart of London",
          propertyCost: "500",
          propertyFrequency: "PP/Night",
          feature: {
            hasPool: true,
            hasTv: true,
            localFood: true,
            isRural: false,
            wheelchairAccessible: false,
            isCity: true,
            hasTransport: false,
          },
        },
      ],
    };
  },
  computed: {
    location() {
      const { location } = useRoute().params;
      const splitLocation = location.split(" ");
      for (var i = 0; i < splitLocation.length; i++) {
        const capital = splitLocation[i].charAt(0).toUpperCase();
        const remainingWord = splitLocation[i].slice(1);
        splitLocation[i] = `${capital}${remainingWord}`;
      }
      return splitLocation.join(" ");
    },

    filteredProperties() {
      if(this.location === 'All'){
        return this.properties
      }

      return this.properties.filter((property) => property.propertyLocation === this.location)
    },
  },

  mounted() {
    console.log(this.filteredProperties);
  }
};
</script>

<style>
</style>