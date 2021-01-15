import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';

// index.jsの場合はファイル名を指定する必要はない
import router from './router';
import store from './store';

createApp(App).use(store).use(router).mount('#app');
