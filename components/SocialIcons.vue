<template>
  <div class="SocialLinks">
    <a href="#" class="SocialLinks__link">
        <BaseIcon :use="'Facebook'" />
    </a>
    <a href="#" class="SocialLinks__link">
        <base-icon :use="'Insta'" />
    </a>
    <a href="" class="SocialLinks__link">
        <BaseIcon :use="'Twitter'" />
    </a>
  </div>
</template>

<script>

import BaseIcon from './BaseIcon.vue';

export default {
  components: {
    BaseIcon,
  },
  computed: {

  }
}
</script>

<style>
@import '../assets/css/mixins/row.css';

.SocialLinks {
  @mixin row var(--spacing);
  align-items: center;
}

.SocialLinks a .icon{
  height: 20px;
  width: 20px;
}
</style>