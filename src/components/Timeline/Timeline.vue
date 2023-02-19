<template>
    <nav class="is-primary panel">
        <span class="panel-tabs">
            <a v-for="period in periods" :key="period" class="period" :class="{ 'is-active': period === activePeriod }"
                @click="selectPeriod(period)">{{ period }}</a>
        </span>
    </nav>
    <div class="container">
    <div class="post">
    <a v-for="post in posts" :key="post.title" >
        <a>{{post.title}}</a>
        <div>{{post.created.format('Do MM')}}</div>
    </a>
</div>
</div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import moment from "moment";
import {today, thisWeek, thisMonth} from '@/mocks';
export default defineComponent({
    name: 'Timeline',
    components: {
    },
    // props:{
    //     today,
    //     thisWeek,
    //     thisMonth
    // },
    setup() {
        const periods = ['Today',
            'This week',
            'This month'];
        const activePeriod = ref('Today');
        const selectPeriod = ( period: any) => {
            activePeriod.value = period;
        };
        const posts = computed(() => {
            return [today,thisWeek,thisMonth].filter(
                post=> {
                    if (activePeriod.value==='Today'){
                        return post.created.isAfter(moment().subtract(1,'day'));
                    }
                    if (activePeriod.value==='This week'){
                        return post.created.isAfter(moment().subtract(1,'week'));
                    }
                    if (activePeriod.value==='This month'){
                        return post.created.isAfter(moment().subtract(1,'month'));
                    }
                }
            );});
        return {
            periods,
            activePeriod,
            selectPeriod,
            posts
        };
    }
});
</script>
<style scoped lang="scss">
.is-primary {
    display: flex;
    // align-items: center;
    justify-content: center;
}

.panel-tabs {
    display: flex;
    align-items: space-around;

    // justify-items: center;
    .period {
        margin: 10px;
        &:hover{
            cursor:pointer
        }
    }
    .is-active {
        color:green
    }

}
.container{
    // background-color: orange;

    .post {
        background-color: white;
        }
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
}   

    }
};

</style>