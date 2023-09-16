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
    @mixin stack var(--spacing-sm);

    max-width: 300px;
    height: 400px;
}
.PropertyCard__image__container{
    width: 100%;
    height: 50%;
    border-radius: 0.5rem;
    overflow: hidden;
}

.PropertyCard__image {
    max-width: 100%;
    object-fit: cover;
}

.PropertyCard__text__container {
    @mixin stack var(--spacing-sm);

    padding-left: var(--spacing-xs);
    padding-right: var(--spacing-xs);
}

.PropertyCard__text__topLine {
    display: flex;
    justify-content: space-between;
}

</style>