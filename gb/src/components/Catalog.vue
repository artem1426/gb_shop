<template>
  <div class="container">
    <!--  TODO Filter and Search  -->
    <div class="catalog__filter">Filter</div>
    <ul class="catalog__list container__catalog">
        <Card v-for="item of productList" v-bind:key="item.id" v-bind:data="item" ></Card>
    </ul>
  </div>
</template>

<script>
import Card from "@/components/Card";
import store from "@/store";
export default {
  name: "Catalog",
  components: {Card},
  data(){
    return{
      productList: store.state.productList,
    }
  },
  mounted() {

  }

}
</script>

<style scoped lang="scss">
.container__catalog{
  max-width: 750px;
  margin: auto;
}
.catalog__list{
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 15px 0 15px;
  li{
    margin-bottom: 15px;
  }
  li:last-child{
    margin: 0;
  }
}
.catalog__filter{
  padding: 10px;
  position: absolute;
  border: solid red;
  border-radius: 14px;
  min-height: 500px;
  max-width: 280px;
  width: 280px;
  margin-top: 15px;
}
</style>