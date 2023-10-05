<template>
  <component :is="use" class="icon"/>
</template>

<script>
import Car from './icons/Car.vue';
import Calender from './icons/Calender.vue';
import City from './icons/City.vue';
import Chevron from './icons/Chevron.vue';
import Facebook from './icons/Facebook.vue';
import Food from './icons/Food.vue';
import Insta from './icons/Insta.vue';
import Minus from './icons/Minus.vue';
import Music from './icons/Music.vue';
import Plus from './icons/Plus.vue';
import Pool from './icons/Pool.vue';
import Shield from './icons/Shield.vue';
import Star from './icons/Star.vue';
import Tree from './icons/Tree.vue';
import Twitter from './icons/Twitter.vue';
import Tv from './icons/Tv.vue';
import TwitterBird from './icons/TwitterBird.vue';
import Wheelchair from './icons/Wheelchair.vue';

export default {
    components: {
        Car,
        Calender,
        City,
        Chevron,
        Facebook,
        Food,
        Insta,
        Minus,
        Music,
        Plus,
        Pool,
        Shield,
        Star,
        Tree,
        Twitter,
        Tv,
        TwitterBird,
        Wheelchair,
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