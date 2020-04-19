<template>
  <div id="app">
     <div class="div1">啦啦啦</div>
     <div class="div2">咔咔咔</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang='scss'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  .div1 {
    width:  300rem/$e;
    height: 100rem/$e;
    background-color: $theme-color;
    font-size: 32rem/$e;
  }
  .div2{
    width:  500rem/$e;
    height: 100rem/$e;
    background-color:red;
    font-size: 32rem/$e;
  }
}

</style>
