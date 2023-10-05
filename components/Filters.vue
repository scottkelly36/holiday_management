<template>
  <section class="Filters">
    <button v-for="(filter, index) in filters" class="Filter__item" :key="index">
        <BaseIcon :use="filter.icon" />
        <p class="Filter__item-text">{{filter.name}}</p>
    </button>
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
                    name: 'Accessible',
                    icon: 'Wheelchair',
                },
                {
                    name: 'TV',
                    icon: 'Tv',
                },
                {
                    name: 'Entertainment',
                    icon: 'Music',
                },
                {
                    name: 'Rural',
                    icon: 'Tree',
                },
                {
                    name: 'City',
                    icon: 'City',
                },
                {
                    name: 'Transport',
                    icon: 'Car',
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
    position: sticky;
    top: 0;
    max-width: 100vw;
    overflow: scroll;
    display: flex;
    justify-content: space-around;
    background: var(--white);
    box-shadow: var(--bottom-shadow);
}

.Filter__item {
    @mixin stack var(--spacing-sm);
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
    width: 100px;
    height: 100px;
    border: none;
    background: none;
}

.Filter__item .icon {
    width: 30px;
    height: 30px;
}

</style>