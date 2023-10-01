<template>
    <aside class="HolidayForm__container">
        <h2>Build your dream get away!</h2>
        <p>not sure where to go let us make some suggestions</p>
        <form @submit.prevent="redirect" class="Form__container">
            <select class="FormInput FormInput__select" v-model="selectedLocation">
                <option value="all">Anywhere</option>
                <option value="london">London</option>
                <option value="newcastle">Newcastle</option>
                <option value="manchester">Manchester</option>
                <option value="edinburgh">Edinburgh</option>
                <option value="leeds">Leeds</option>
            </select>
            <button type="submit" class="button__outline--primary">
                Start Your Search
            </button>
        </form>
    </aside>
</template>

<script>
export default {
    data() {
        return {
            selectedLocation: 'all'
        };
    },
    methods: {
        redirect() {
            this.$router.push(`/location/${this.selectedLocation}`);
        }
    }
}
</script>

<style>
    .HolidayForm__container {
        position: absolute;
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
        left: 100px;
        top: 30%;
        z-index: 4;
        box-shadow: var(--card-shadow);
        background-color: var(--white);
        width: 40%;
        padding: var(--spacing-md);
        border-radius: 0.8rem;
    }
</style>