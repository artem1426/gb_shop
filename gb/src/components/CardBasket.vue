<template>
  <li>
    <div class="card">
      <img src="../assets/card_1.jpg" alt="">
      <div class="card__block">
        <div class="card__info">
          <h2>{{ data.name }}</h2>
          <span>{{ data.info }}</span>
          <br/>
          <h5>{{ data.cost }}$</h5>
        </div>
        <button v-on:click="delFromBasket(data.id)">
          Delete from basket
        </button>
      </div>
    </div>
  </li>
</template>

<script>
import store from "@/store";

export default {
  name: 'CardBasket',
  props: [
    'data'
  ],
  methods: {
    delFromBasket(id) {
      store.commit('setBasket', store.state.basketList.filter(el => {
        if (el.id !== id)
          return true;
      }));
      //TODO сделать визуальное удаление из корзины
    }
  }
}
</script>

<style lang="scss">

</style>