<template>
  <div class="container basket">
    <ul>
      <CardBasket v-for="item of list" v-bind:key="item.id" v-bind:data="item" />
    </ul>
  </div>
</template>
<script>
import CardBasket from "@/components/CardBasket";
import store from "@/store";
export default {
  name: 'Basket',
  components: {CardBasket},
  data(){
    return{
      list: store.state.basketList,
    }
  },
}
</script>
<style lang="scss">
.basket{
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 15px 0 15px;
    li{
      margin-bottom: 15px;
    }
    li:last-child{
      margin-bottom: 0;
    }
  }
}
</style>