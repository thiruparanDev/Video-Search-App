<template >
    <a v-for="post in posts" :key="post.id" class="post" >
        <a>{{post.title}}</a>
        <a>{{post.created.format('Do MM')}}</a>
    </a>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
export default defineComponent ({
    name:'TimelinePost',
    props:['posts']
    // ,
    // setup (){

    // }
});
</script>

<style scoped lang="scss">
.post{
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-bottom: 10px;
    // max-width: 200px;
a{
        // background-color: blue;
        display:flex;
        justify-content: left;
        position: relative;
        // left:800px
        // left:200px
        // left:'50%'
        &:hover{
            cursor: pointer;
            background-color: gray;
}   

    }
}
</style>
