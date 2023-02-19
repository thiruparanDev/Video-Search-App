<template>
    <!-- <a-table :data-source="data">
        <a-table-column-group>
            <template #title><span style="color: #1890ff">Name</span></template>
            <a-table-column key="firstName" data-index="firstName">
                <template #title><span style="color: #1890ff">First Name</span></template>
            </a-table-column>
            <a-table-column key="lastName" title="Last Name" data-index="lastName" />
        </a-table-column-group>
        <a-table-column key="age" title="Age" data-index="age" />
        <a-table-column key="address" title="Address" data-index="address" />
        <a-table-column key="tags" title="Tags" data-index="tags">
            <template #default="{ text: tags }">
                <span>
                    <a-tag v-for="tag in tags" :key="tag" color="blue">{{ tag }}</a-tag>
                </span>
            </template>
        </a-table-column>
        <a-table-column key="action" title="Action">
            <template #default="{ record }">
                <span>
                    <a>Action 一 {{ record.firstName }}</a>
                    <a-divider type="vertical" />
                    <a>Delete</a>
                </span>
            </template>
        </a-table-column>
    </a-table> -->
    
    <a-table :dataSource="dataSource" :columns="columnsRef" ><draggable>hi</draggable></a-table>
    <a-button type="primary" @click="changeName">Primary Button</a-button>
    {{name}}
</template>
<script lang="ts">
import { defineComponent } from "vue";
import draggable from "vuedraggable";
import { ref } from "vue";

export default defineComponent({
  components:{
    draggable
  },
    setup() {
      const name = ref ("thiru");
        const dataSource= [
          {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street'
          },
          {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street'
          }
        ];

        const columnsRef = ref([
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            hidden:false
          },
          {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            hidden:false
          },
          {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            hidden:false
          }
        ].filter(column => !column.hidden));
        const changeName = ()=>{
          name.value="bala";
          columnsRef.value[2].title="ab";
          columnsRef.value[2].hidden=true;

        };
        // const getColumn = ()=> {
        //   return columnsRef.value.filter(column => !column.hidden);
        // };
        return {
            dataSource,
            columnsRef,
            name,
            changeName
            // ,
            // getColumn
        };
    }
});
</script>
<style scoped lang="scss"></style>