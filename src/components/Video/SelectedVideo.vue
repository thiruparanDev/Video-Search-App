<template>
  <div class="selectedVideo" v-if="video">
    <div >{{video?.snippet?.title}}</div>
<iframe width="560" height="315" :src="videoUrl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  // name: 'Home',
  props: ['video'],
  
  methods: {

  },
  components: {
    // AdditionalPage
  },
  computed: {
    videoUrl(props:any){
        return `https://www.youtube.com/embed/${props?.video?.id?.videoId}`;
    }
 
  },
  setup () {

      //  let videoUrl=`https://www.youtube.com/embed/sW0iNSrmcDQ`;

    // console.log(props?.video);
    return {
      // videoUrl
    };
  }
});

</script>

<style lang="scss" scoped >
.selectedVideo{
    // background-color:blue;
}
</style>
