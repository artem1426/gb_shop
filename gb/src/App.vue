<template>
  <!-- Header -->
  <NavBar/>
  <!-- Main -->
  <main>
    <router-view/>
  </main>
  <!-- Footer -->
  <footer>
    <Footer/>
  </footer>
</template>
<script>
import Home from "@/views/Home";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default {
  name: 'App.vue',
  components: {Home, NavBar, Footer},
}

</script>

<style lang="scss">
$Main_red_color: #cb3b2a;
$Background_black_main: #343434;
$Background_black_second: #3c3c3c;
@font-face {
  font-family: "Roboto Italic";
  src: url("assets/fonts/Roboto-Italic.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

* {
  margin: 0;
  padding: 0;
  font-family: "Roboto Italic", sans-serif;

  button {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #dc3545;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid #dc3545;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  }

  button:hover {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  }
}

main {
  background: $Background_black_second;
  min-height: 80vh;
}

footer {
  background: $Background_black_main;
  padding: 30px 0 0;
  min-height: 85px;
  color: #cb3b2a;
}
</style>