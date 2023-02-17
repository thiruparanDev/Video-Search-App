import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import antd, { DatePicker } from 'ant-design-vue';
import '@/styles.scss';

createApp(App).use(store).use(antd).use(router).mount('#app');
