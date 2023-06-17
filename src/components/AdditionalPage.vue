<template>
  <div class="additional">
    <h1>This is an additional page</h1>
    <button @click="changeObject">Click</button>
    <div>{{newObj}}</div>
    <!-- <div>{{newObjRef}}</div> -->
    <div>{{newObjRef1}}</div>
    <button @click="onClickHandler">click</button>
    <button @click="onClickHandler2">click2</button>
    {{add}}
  </div>
  <!-- <ColorPicker :view="'gradient'" :default-value="'green'" /> -->
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch, computed } from 'vue';
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
    // const newObjRef = reactive({
    //   person: {
    //     name: "Bala",
    //     Age: 72
    //   },
    //   Animal: {
    //     name:"dog",
    //     colour:"orange"
    //   }
    // });
    let a={b:1};
    const newObjRef1 = ref(newObj);
    watch(newObj,()=>{console.log("newObj changed");});
    watch(newObjRef1,()=>{console.log("newObjRef changed");});
    const add=ref([1,a]);
    // const newOb = computed(()=>{
    //   return newObj;
    // });

    const onClickHandler=()=>{
      newObjRef1.value.person={name:"bala", Age:72};
      // newObjRef1.value.person.Age=73;
      // newObjRef1.value.dog={name:'d'};
      // newObjRef.Animal.colour = "orange";
    };
    const onClickHandler2=()=>{
      // newObjRef1.value.person={name:"thiru", Age:72};
      newObjRef1.value.person.Age=73;
      // a.value=3;
      a={b:2};
    };
    return {
      changeObject,
      newObj,
      // newObjRef,
      onClickHandler,
      newObjRef1,
      onClickHandler2,
      add
    };
  }
});
</script>

<style lang="scss" >
.additional {
  font-size: 11px;
}
</style>
