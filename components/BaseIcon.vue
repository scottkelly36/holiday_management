<template>
  <component :is="use" class="icon"/>
</template>

<script>
import Calender from './icons/Calender.vue';
import Chevron from './icons/Chevron.vue';
import Food from './icons/Food.vue';
import Shield from './icons/Shield.vue';
import Star from './icons/Star.vue';

export default {
    components: {
        Calender,
        Chevron,
        Food,
        Shield,
        Star,
    },
    props: {
        use: {
            type: String,
            default: '',
            required: true,
        }
    }
}
</script>

<style>

</style>