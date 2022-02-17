<template>
  <div class="footer_block container">
      <ul class="footer__list">
        <li><strong>Instagram</strong></li>
        <li><strong>Vk</strong></li>
        <li><strong>Facebook</strong></li>
      </ul>
      <ul class="footer__list">
        <li><strong>Info</strong></li>
        <li><strong>Contact</strong></li>
        <li><strong>FAQ</strong></li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Footer',

}
</script>

<style lang="scss">
.footer_block{
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.footer__list{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style-type: none;
  li{
    strong{
      font-size: 16pt;
      cursor: pointer;
    }
    strong:hover{
      color: black;
    }
  }
}
</style>