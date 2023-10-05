<template>
  <section class="PropertyGrid container">
    <div v-for="(property, index) in properties" :key="index" class="PropertyCard__container">
        <PropertyCard :content="property"/>
    </div>
  </section>
</template>

<script>
export default {
    props: {
        properties: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>
    .PropertyGrid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
</style>