<template>
  <div class="container">
    <h1>Menu</h1>
    <div class="row">
      <div class="col-sm-9">
        <div class="row">
          <card-menu title="test" description="test" image="test"></card-menu>

        </div>
      </div>
      <div class="col-sm-2">
        <h1>Checkout</h1>
      </div>

    </div>
   

  </div>
</template>

<script>
import CardMenu from '../components/CardMenu.vue'

export default {
  name: 'Menu',
  components:{
    'card-menu': CardMenu,
  }

}
</script>

<style scoped>
.card{
  margin: 10px;
}
</style>
