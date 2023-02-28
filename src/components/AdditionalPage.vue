<template>
  <div class="additional">
    <h1>This is an additional page</h1>
    <div>{{newObj}}</div>
    <!-- <div>{{newObjRef}}</div> -->
    <div>{{newObjRef1}}</div>
    <button @click="onClickHandler">click</button>
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive, watch, computed } from 'vue';

export default defineComponent({
  setup(){
    interface obj{
      person:{name:string, Age:number},
      Animal:{name:string, colour:string},
      dog?:{name:string}
    }
    const newObj:obj = {
      person: {
        name: "Thiru",
        Age: 26
      },
      Animal: {
        name:"dog",
        colour:"black"
      }
    };
    const newObjRef = reactive({
      person: {
        name: "Bala",
        Age: 72
      },
      Animal: {
        name:"dog",
        colour:"orange"
      }
    });
    const newObjRef1 = reactive(newObj);
    watch(newObj,()=>{console.log("newObj changed");});
    watch(newObjRef,()=>{console.log("newObjRef changed");});
    // const newOb = computed(()=>{
    //   return newObj;
    // });

    const onClickHandler=()=>{
      newObjRef1.dog={name:'d'};
      // newObjRef.Animal.colour = "orange";
    };

    return {
      newObj,
      newObjRef,
      onClickHandler,
      newObjRef1
    };
  }
});
</script>

<style lang="scss" >
.additional {
  font-size: 11px;
}
</style>
