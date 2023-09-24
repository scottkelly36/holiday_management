<template>
  <footer class="TheFooter">
    <div class="TheFooter__container container">
      <div class="TheFooter__copyright">
        <p>©randompage {{ getYear }}</p>
      </div>
      <socialIcons />
    </div>
  </footer>
</template>

<script>
import BaseIcon from './BaseIcon.vue';
import SocialIcons from './SocialIcons.vue';

export default {
  components: {
    BaseIcon,
    SocialIcons,
  },
  props: {
    content: {
      type: Object,
      required: true,
    }
  },
  computed: {
    getYear() {
      return new Date().getFullYear();
    },
  },
}
</script>

<style>
@import '../assets/css/mixins/row.css';

    .TheFooter {
        height: 50px;
        background: var(--grey);
        bottom: 0;
        margin-top: var(--spacing-3xl);
    }
    
    .TheFooter__container {
      @mixin row var(--spacing-2xl);
      width: 100%;
      height: 100%;
      justify-content: space-between;
    }

    .TheFooter__copyright {
      display: flex;
      align-items: center;
      font-size: 0.8rem;
      font-weight: 400;
    }

    

</style>