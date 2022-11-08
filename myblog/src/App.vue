<template>
  <div id="app">
    <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/contact">contact</router-link>


    <HelloWorld   :path="`${path}`" :fileName="`${name}`"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import "./assets/theme/index.css";
import ElementUI from 'element-ui';
import Vue from 'vue';


Vue.use(ElementUI);

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      name: 'zz.pdf',
      path: 'lib/web/viewer.html'
    }
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
