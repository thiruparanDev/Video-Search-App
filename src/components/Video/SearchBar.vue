<template>
  <div class="searchBar">
    <input type="text" @input="onInput" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
// import AdditionalPage from '../components/AdditionalPage'
// import AdditionalPage from '@/components/AdditionalPage.vue'
const termChange='termChange';
export default defineComponent({
  emits:[termChange],
  // name: 'Home',
  components: {
    // AdditionalPage
  },
  setup(_,{emit}) {
    const onInput = (event:any) => {
      emit(termChange,(event?.target?.value));
      // emit(termChange,event!.target!.value);??
      // console.log(event.target as HTMLInputElement).value)
    };
    return {
      onInput
    };
  }
});
</script>

<style lang="scss">
.searchBar {
  background-color: blue;
}
</style>
