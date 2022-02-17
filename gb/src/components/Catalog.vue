<template>
  <div class="container">
    <!--  TODO Filter and Search  -->
    <div class="catalog__filter"></div>
    <ul class="catalog__list container__catalog">
        <li>
          <Card/>
        </li>
        <li>
          <Card/>
        </li>
        <li>
          <Card/>
        </li>
        <li>
          <Card/>
        </li>
    </ul>
  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "Catalog",
  components: {Card},

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
  position: absolute;
  border: solid red;
  border-radius: 14px;
  min-height: 500px;
  max-width: 290px;
  width: 290px;
  margin-top: 15px;
}
</style>