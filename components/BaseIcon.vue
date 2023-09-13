<template>
  <component :is="use" class="icon"/>
</template>

<script>
import Calender from './icons/Calender.vue';
import Shield from './icons/Shield.vue';
import Food from './icons/Food.vue';

export default {
    components: {
        Calender,
        Shield,
        Food,
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