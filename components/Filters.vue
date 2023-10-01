<template>
  <section class="Filters">
    <div v-for="(filter, index) in filters" class="Filter__item" :key="index">
        <BaseIcon :use="filter.icon" />
        <p class="Filter__item-text">{{filter.name}}</p>
    </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            filters: [
                {
                    name: 'Pool',
                    icon: 'Pool',
                },
                {
                    name: 'Pool',
                    icon: 'Pool',
                },
                {
                    name: 'Pool',
                    icon: 'Pool',
                },
                {
                    name: 'Pool',
                    icon: 'Pool',
                },
                {
                    name: 'Pool',
                    icon: 'Pool',
                },
                {
                    name: 'Pool',
                    icon: 'Pool',
                },
            ]
        }
    }
}
</script>

<style>
@import '../assets/css/mixins/row.css';
@import '../assets/css/mixins/stack.css';
.Filters{
    @mixin row var(--spacing-md);
    max-width: 100vw;
    overflow: scroll;
}

.Filter__item {
    @mixin stack var(--spacing-sm);
    justify-content: center;
    align-items: center;
}

</style>