<template>
    <header>
        <NavBar />
    </header>
    <main class="PageContent">
        <slot />
    </main>
    <Footer />
</template>
<style>
@import '../assets/css/mixins/stack.css';

    .PageContent {
    @mixin stack var(--spacing-xl);
    min-height: 100vh;
    }
</style>