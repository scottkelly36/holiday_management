<template>
  <section class="Features container">
    <template v-for="(feature, index) in features" :key='index'>
        <FeaturedItem :feature="feature" />
    </template>
  </section>
</template>

<script>
export default {
    data() {
        return {
            features: [
                {
                    icon: 'Shield',
                    heading: 'Book with confidence',
                    copy: 'Get 24/7 support and discover helpful reviews from our trusted community of guests.'
                },
                {
                    icon: 'Food',
                    heading: 'Get the amenities you want',
                    copy: 'Hot tubs, pools, BBQs – explore dozens of great extras that fit your needs.'
                },
                {
                    icon: 'Calender',
                    heading: 'Keep it flexible',
                    copy: 'Stays with flexible cancellation make it easy to rebook if your plans change.'
                },
    
            ]
        }
    }, 
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