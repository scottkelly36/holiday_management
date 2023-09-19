<template>
  <component :is="use" class="icon"/>
</template>

<script>
import Calender from './icons/Calender.vue';
import Chevron from './icons/Chevron.vue';
import Facebook from './icons/Facebook.vue';
import Food from './icons/Food.vue';
import Insta from './icons/Insta.vue';
import Minus from './icons/Minus.vue';
import Plus from './icons/Plus.vue';
import Shield from './icons/Shield.vue';
import Star from './icons/Star.vue';
import Twitter from './icons/Twitter.vue';
import TwitterBird from './icons/TwitterBird.vue';

export default {
    components: {
        Calender,
        Chevron,
        Facebook,
        Food,
        Insta,
        Minus,
        Plus,
        Shield,
        Star,
        Twitter,
        TwitterBird,
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