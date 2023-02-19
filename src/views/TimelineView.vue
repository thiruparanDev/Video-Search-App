<template>
    <div class="section">
        <div class="container">
            <Timeline/>
        </div>
    </div>

    </template>
    <script lang="ts">
    import { defineComponent } from "vue";
    import Timeline from "@/components/Timeline/Timeline.vue";

    export default defineComponent({
    components: {
        Timeline
    }
    });
    </script>
    <style scoped lang="scss">
    
    </style>