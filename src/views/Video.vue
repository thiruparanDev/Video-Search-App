<template>
  <div class="video">
    <h1>This is Video page</h1>
    <SearchBar @termChange="onTermChange" />
    <SelectedVideo :video="selectVideoValue"/>
    <VideoList :videos="videos" @selectVideo="selectVideo"/>
    <div></div>
  </div>
</template>
<script lang="ts">
import { defineComponent,ref } from 'vue';
import SearchBar from '@/components/Video/SearchBar.vue';
import VideoList from '@/components/Video/VideoList.vue';
import SelectedVideo from '@/components/Video/SelectedVideo.vue';

import axios from 'axios';
const API_KEY = 'AIzaSyBBP4qzaQ787OqjtylnC2JaLwmC-TkJ6aU';
export default defineComponent({
  // name: 'Home',

  components: {
    SearchBar,
    VideoList,
    SelectedVideo
  },
  setup () {
    const videos = ref([]);
    const selectVideoValue = ref();
      const onTermChange=(term:any)=> {

      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: term
        }
      }).then(response => videos.value=response.data.items);
    };
      const selectVideo = (video:any) => {
        console.log(video);

        selectVideoValue.value=video;
      };
    return {
      // getVideo,
      onTermChange,
      videos,
      selectVideo,
      selectVideoValue
    };
  }
});

</script>

<style lang="scss" >
.video {
  font-size: 11px;
    display:flex;
  flex-direction:column;
  align-items:left;
  // align-items:left
}
</style>
