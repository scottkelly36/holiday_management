<template>
    <aside class="HolidayForm__container">
        <h2>Build your dream get away!</h2>
        <p>not sure where to go let us make some suggestions</p>
        <form action="" class="Form__container">
            <label for="location">Location</label>
            <Select class="FormInput FormInput__select">
                <option value="">Anywhere</option>
            </Select>
            <button class="button__outline--primary">
                Start Your Search
            </button>
        </form>
    </aside>
</template>

<script>
export default {

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