<template>
  <section class="Features container">
    <template v-for="(feature, index) in content.content" :key='index'>
        <FeaturedItem :feature="feature" />
    </template>
  </section>
</template>

<script>
export default {
    props: {
        content: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="postcss">
    @import '../assets/css/mixins/row.css';

    .Features {
        @mixin row var(--spacing-xl);
        padding-top: var(--spacing-xl);
        padding-bottom: var(--spacing-xl);
    }
</style>