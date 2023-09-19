<template>
  <div class="Accordion">
    <button
      type="button"
      class="Accordion__heading"
      @click="toggleAccordion"
      :aria-expanded="isOpen"
    >
      <h3>{{ accordionItem.accordionHeading }}</h3>
      <BaseIcon :use="isOpen ? 'Minus' : 'Plus'" />
    </button>
    <div :class="isOpen ? 'Accordion__content show' : 'Accordion__content'">
      <div class="Accordion__text" v-if="isOpen">
        {{ accordionItem.accordionCopy }}
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    accordionItem: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false, // Initialize isOpen as data
    };
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
  
  <style>
.Accordion__heading {
  width: 100%;
  background: none;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing) var(--spacing-lg);
}

.Accordion__heading .icon {
  width: 1.2rem;
  color: var(--black);
}

.Accordion__text {
  padding: var(--spacing-md) var(--spacing-lg);
}

.Accordion__content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.7s ease-in-out;
}

.Accordion__content.show {
  max-height: 500px;
}
</style>