<template>
  <section class="Faq container">
    <h2 class="Faq__heading">{{ heading }}</h2>
    <div class="Faq__accordion__container">
      <BaseAccordion
        v-for="(accordionItem, index) in accordionItems"
        :key="index"
        :accordion-item="accordionItem"
      />
    </div>
  </section>
</template>

<script>
import BaseAccordion from './BaseAccordion.vue';

export default {
    components: {
        BaseAccordion,
    },

    props: {
        content: {
            type: Object,
            required: true,
        },
    },

    computed: {
        heading() {
            return this.content.content.heading;
        },
        accordionItems() {
            return this.content.content.accordionItems;
        },
    },
};
</script>

<style>
@import '../assets/css/mixins/row.css';
@import '../assets/css/mixins/stack.css';
.Faq {
    @mixin row var(--spacing-lg);
}

.Faq__heading{
    width: 50%;
}

.Faq__accordion__container {
    width: 50%;
    max-width: 50%;
}
</style>