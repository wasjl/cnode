<template>
    <div>
        <h1 v-for="(v,i) in this.$store.state.list" :key="i">{{v.number}}</h1>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>

</style>