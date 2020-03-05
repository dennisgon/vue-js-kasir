<template>
<div class="card col-sm-3" style="width: 18rem;">
  <img class="card-img-top" v-bind:src="image" >
  <div class="card-body">
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">{{ description }}</p>
    <a href="#" class="btn btn-primary">Checkout</a>
  </div>
</div>
</template>

<script>
export default {
  name: 'CardMenu',
  props: ['title','description','image'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
