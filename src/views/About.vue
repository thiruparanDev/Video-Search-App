<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <AdditionalPage />
    <div></div>
  </div>
</template>
<!-- const API_KEY = 'https://newsapi.org/v2/everything?q=tesla&from=2023-01-12&sortBy=publishedAt&apiKey=b52fc2c10e564e08a607bc5ff9f4ccad' -->
<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
// import AdditionalPage from '../components/AdditionalPage'
import AdditionalPage from "@/components/AdditionalPage.vue";

export default defineComponent({
  // name: 'Home',

  components: {
    AdditionalPage
  }
});
</script>

<style lang="scss">
.about {
  font-size: 11px;
}
</style>
