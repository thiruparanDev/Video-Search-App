<template>
  <div class="additional">
    <h1>This is an additional page</h1>
    <button @click="changeObject">Click</button>
    <div></div>
  </div>
  <!-- <ColorPicker :view="'gradient'" :default-value="'green'" /> -->
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
// import { ColorPicker } from '@progress/kendo-vue-inputs';
export default defineComponent({
  // components:{ColorPicker},
  setup (){
    const state = reactive({name:'Thiru', age:16});
    const refState = ref({name:'Thiru', age:16});
    const changeObject=()=>{
      state.name='hi';
      console.log(state);
      refState.value.name='hlell';
      console.log(refState);
    };
    return {
      changeObject
    };
  }
});
</script>

<style lang="scss" >
.additional {
  font-size: 11px;
}
</style>
