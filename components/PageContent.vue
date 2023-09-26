<template>
    <component v-for="(PageContent, index) in pageContent" :is="PageContent.block" :key="index" :content="PageContent"/>
</template>

<script>
import BaseSlider from './BaseSlider.vue';
import FAQ from './FAQ.vue';
import Features from './Features.vue';
import Hero from './Hero.vue';

export default {
    components: {
        BaseSlider,
        FAQ,
        Features,
        Hero,
    },
    props: {
        pageContent: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style>
@import '../assets/css/mixins/stack.css';

    .PageContent {
    @mixin stack var(--spacing-xl);
    }
</style>