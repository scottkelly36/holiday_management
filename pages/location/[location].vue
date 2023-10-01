<template>
    <div class="Location__heading container">
        <h1>properties in {{location}}</h1>
    </div>
    <pageContent/>
</template>

<script>
export default {
    data() {
        return {
            pageContent: [
                {
                    block: 'title'
                }
            ],            
        }
    },
    computed: {
        location() {
            const {location} = useRoute().params;
            const splitLocation = location.split(" ");
            for(var i =0; i< splitLocation.length; i++) {
               const capital = splitLocation[i].charAt(0).toUpperCase();
               const remainingWord = splitLocation[i].slice(1);
               splitLocation[i] = `${capital}${remainingWord}`;
            }
          return splitLocation.join(" ")
        }
    },

    
}
</script>

<style>

</style>