<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About </router-link> |
    <router-link to="/video">Video</router-link> |
    <router-link to="/table">Table</router-link> |
    <router-link to="/timelineView">Timeline</router-link>
  </div>
  <router-view/>
  
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";
export default defineComponent ({
    props:['posts'],
    components: {
    }
    // ,
    // setup (){

    // }
});
</script>
<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

#nav {
  padding: 30px;
  /* align-items: start */
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
