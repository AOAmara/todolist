require('./bootstrap');
import Vue from 'vue';
import App from './vue/app';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faTrash, faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus, faTrash, faList);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

const app = new Vue({
   el: '#app',
   components: { App }
});
