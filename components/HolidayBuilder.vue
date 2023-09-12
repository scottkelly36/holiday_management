<template>
    <aside class="Form__container">
        <h2>Build your dream get away!</h2>
        <p>not sure where to go let us make some suggestions</p>
        <form action="">
            <Select>
                <label for="location">Location</label>
                <option value="">Anywhere</option>
            </Select>
        </form>
    </aside>
</template>

<script>
export default {

}
</script>

<style>
    .Form__container {
        position: absolute;
        left: 30px;
        top: 20%;
        z-index: 4;
        box-shadow: var(--card-shadow);
        background-color: var(--white);

        width: 40%;
        padding: var(--spacing-md);
        border-radius: 0.8rem;
    }
</style>