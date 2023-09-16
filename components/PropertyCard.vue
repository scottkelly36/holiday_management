<template>
  <div class="PropertyCard">
    <div class="PropertyCard__image__container">
        <img :src="property.propertyImage" alt="" class="PropertyCard__image">
    </div>
    <div class="PropertyCard__text__container">
        <div class="PropertyCard__text__topLine">
            <h4 class="PropertyCard__name">
                {{ property.propertyName }}
            </h4>
            <div class="PropertyCard__rating">
                <BaseIcon use="Star" />
                {{ property.propertyRating }}
            </div>
        </div>
        <p class="text--small">
            {{ property.propertyCopy }}
        </p>
        <div class="PropertyCard__price">
            <p class="currency"></p>
            <p class="cost">{{  property.propertyCost   }}</p>
            <p class="frequency">{{ property.propertyFrequency}}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        property: {
            type: Object,
            required: true,
        },
    }
}
</script>

<style>
@import '../assets/css/mixins/stack.css';
.PropertyCard {
    width: 250px;
    height: 300px;
}

.PropertyCard__text__container {
    @mixin stack var(--spacing-sm)
}

.PropertyCard__text__topLine {
    display: flex;
    justify-content: space-between;
}

</style>