<template>
  <div class="videoListItem">
    <li @click="selectVideo">
      <img :src="video.snippet.thumbnails.high.url" />
      {{ video.snippet.title }}
    </li>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
// import AdditionalPage from '../components/AdditionalPage'
// import AdditionalPage from '@/components/AdditionalPage.vue'
export default defineComponent({
  // name: 'Home',
  props: ["video"],
  methods: {},
  components: {
    // AdditionalPage
  },
  computed: {},
  setup() {
    const selectVideo = (event: any) => {
      console.log((event.target.value.snippet as HTMLInputElement).title);
    };
    return {
      selectVideo,
    };
  },
});
</script>

<style lang="scss" scoped>
.videoListItem {
  // background-color:blue;
  li {
    img {
      height: 100px;
    }
  }
}
</style>
