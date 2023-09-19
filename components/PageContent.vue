<template>
    <main class="PageContent">
        <component v-for="(PageContent, index) in pageContent" :is="PageContent.block" :key="index" :content="PageContent"/>
    </main>
</template>

<script>
import Hero from './Hero.vue';
import Features from './Features.vue';
import BaseSlider from './BaseSlider.vue';

export default {
    components: {
        Hero,
        Features,
        BaseSlider,
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