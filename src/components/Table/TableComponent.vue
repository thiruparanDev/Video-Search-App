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
    <a-table :dataSource="dataSource" :columns="columns" ></a-table>
    <a-button type="primary">Primary Button</a-button>
    hi
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
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

        const columns = [
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
          },
          {
            title: 'Age',
            dataIndex: 'age',
            key: 'age'
          },
          {
            title: 'Address',
            dataIndex: 'address',
            key: 'address'
          }
        ];
        return {
            dataSource,
            columns
        };
    }
});
</script>
<style scoped lang="scss"></style>