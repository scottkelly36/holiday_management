<template>
  <div class="FeatureItem">
    <BaseIcon :use="feature.icon"/>
    <h3>{{feature.heading}}</h3>
    <p class="text-small">
        {{ feature.copy }}
    </p>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue';

export default {
    components: {
        BaseIcon
    },
    props: {
        feature: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style>
@import '../assets/css/mixins/stack.css';

    .FeatureItem {
        @mixin stack var(--spacing);
    }
</style>