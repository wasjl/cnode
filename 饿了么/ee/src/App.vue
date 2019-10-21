<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',


}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  font-size: 0.33rem
}
html,body,#app{
  height: 100%;

}
ul,ol{
  list-style: none
}
</style>
