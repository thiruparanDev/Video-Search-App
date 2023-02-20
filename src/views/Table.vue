<template>
    <div>
    <TableComponent/>
</div>
<div class="kendoContainer">
    <KendoTableComponent/>
</div>
    </template>
    <script lang="ts">
    import { defineComponent } from "vue";
    import TableComponent from '@/components/Table/TableComponent.vue';
    import KendoTableComponent from '@/components/Table/KendoTableComponent.vue';
    // import KendoTableComponent from '../components/Table/KendoTableComponent.vue';
    
    export default defineComponent({
    components: {
        TableComponent,
        KendoTableComponent
    }
    });
    </script>
    <style scoped lang="scss">
    .kendoContainer{
        margin-top: 50px;
    }
    </style>