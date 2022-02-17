<template>
  <header class="nav_bar">
    <ul class="container">
      <li>
        <router-link to="/">
          <strong>GB_SHOP</strong>
        </router-link>
      </li>
      <li>
        <strong>City: {{ city }}</strong>
      </li>
      <li>
        <router-link to="/about">
          <strong>About</strong>
        </router-link>
      </li>
      <li>
        <router-link to="/basket">
          <strong>Basket</strong>
        </router-link>
      </li>
      <li>
        <Button type="button">
          <strong>Sing in</strong>
        </Button>
      </li>
    </ul>
  </header>
</template>
<script>
export default {
  name: 'NavBar',
  data() {
    return {
      city: 'Moscow',
    }
  }
}
</script>

<style lang="scss">
$Main_red_color: #cb3b2a;
$Background_black_main: #343434;
header {
  min-height: 65px;
}

.nav_bar {
  background: $Background_black_main;

  ul {
    padding-top: 5px;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: auto;
  }

  li {
    user-select: none;
    cursor: pointer;
    display: flex;

    span {
      color: $Main_red_color;
      cursor: auto;
      font-size: 18pt;
      margin-right: 15px;
    }

    span:hover {
      color: black;
    }
  }

  a {
    text-decoration: none;
  }

  strong {
    color: $Main_red_color;
    font-size: 18pt;
  }

  strong:hover {
    color: black;
  }
}

.container {
  max-width: 1378px;
  margin: auto;
}
</style>
new Vue()
