<template>
  <div class="video">
    <h1>This is Video page</h1>
    <SearchBar @termChange="onTermChange"/>
    <VideoList :videos="videos"/>
    <!-- <button @click="getVideo">click</button> -->
    <div></div>
  </div>
</template>
<script lang="ts">
import { defineComponent,ref } from 'vue';
import SearchBar from '@/components/Video/SearchBar.vue';
import VideoList from '@/components/Video/VideoList.vue';
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
// import AdditionalPage from '../components/AdditionalPage'
// import AdditionalPage from '@/components/AdditionalPage.vue'
import axios from 'axios';
const API_KEY = 'AIzaSyBIyTG_IwC38ZvwBPMde-lfGnoBP2J_lrg';
export default defineComponent({
  // name: 'Home',

  components: {
    // AdditionalPage
    SearchBar,
    VideoList
  },
  setup () {
    const videos = ref([]);
      const onTermChange=(term:any)=> {
        console.log(videos);
    // const getVideo = async () => {
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: term
        }
      }).then(response => videos.value=response.data.items);
      // };
        // console.log(term);
    };
    return {
      // getVideo,
      onTermChange,
      videos
    };
  }
});

</script>

<style lang="scss" >
.video {
  font-size: 11px;
}
</style>
