<template>
  <div class="videoList">
      <VideoListItem v-for="video in videos" :video="video" :key="video.etag" @selectVideo="selectVideo"/>
      <!-- {{videos.length}} -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import VideoListItem from '@/components/Video/VideoListItem.vue';
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
// import AdditionalPage from '../components/AdditionalPage'
// import AdditionalPage from '@/components/AdditionalPage.vue'
export default defineComponent({
  // name: 'Home',
  props: ['videos']
   ,
  methods: {

  },
  components: {
    // AdditionalPage
    VideoListItem
  },
  computed: {

  },
  setup (_,{emit}) {
    const selectVideo = (video:any)=>{
          //  console.log(video);
      emit('selectVideo',video);
    };
    return {
      selectVideo
    };
  }
});

</script>

<style lang="scss" scoped >
.videoList{
  display:flex;
  flex-direction:column;
  // align-items:center;
  // align-items:left;
  text-align:left;
  left:400;
    // background-color:blue;
}
</style>