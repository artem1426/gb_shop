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
        <button v-on:click="addToBasket(data.id)">
          Add to basket
        </button>
      </div>
    </div>
  </li>
</template>

<script>
import store from "@/store";

export default {
  name: 'Card',
  props: [
    'data'
  ],
  methods: {
    addToBasket(id) {
      store.state.basketList.push(store.state.productList.find((el) => {
        if (el.id === id)
          return true;
      }));
      console.log(store.state.basketList);
    }
  }
}
</script>

<style lang="scss">
$Main_red_color: #cb3b2a;
.card {
  display: flex;
  justify-content: space-between;
  border: solid 2px $Main_red_color;
  border-radius: 10px;
  min-height: 150px;

  img {
    width: 45%;
    border-radius: 8px;
  }
}

.card__block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  border-radius: 8px;
  padding: 5px;

  h2 {
    font-size: 16pt;
    color: $Main_red_color;
    margin-bottom: 10px;
    text-align: center;
  }

  span {
    color: white;
  }

  h5 {
    font-size: 14pt;
    color: $Main_red_color;
    text-align: end;
  }
}
</style>