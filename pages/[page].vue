<template>
  <p>page {{params}}</p>
</template>

<script>
export default {
    data() {
        return {
            params: {page} = useRoute().params,
        }
    }
}
</script>

<style>

</style>