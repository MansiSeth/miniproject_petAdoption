<template>
    <div>
    <h1>this is shop page</h1>

    <my-search-bar></my-search-bar>
    <my-product-card></my-product-card>

    </div>
</template>

<script>
import MySearchBar from '@/components/MySearchBar.vue'
import MyProductCard from '@/components/MyProductCard.vue'


    export default {

        components: {MySearchBar, MyProductCard}
        
    }
</script>

<style lang="scss" scoped>

</style>