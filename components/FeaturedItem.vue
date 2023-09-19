<template>
  <div class="FeatureItem">
    <BaseIcon :use="feature.featureIcon"/>
    <h3>{{feature.featureHeading}}</h3>
    <p class="text-small">
        {{ feature.featureCopy }}
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
            type: Array,
            required: true,
        }
    }
}
</script>

<style>
@import '../assets/css/mixins/stack.css';

    .FeatureItem {
        @mixin stack var(--spacing-md);
    }

    .FeatureItem .icon {
        width: 3rem;
        height: 3rem;
    }
</style>