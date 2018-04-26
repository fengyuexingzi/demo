import jQuery from 'jquery';
import vue from 'vue';
import Tasks from './components/Tasks.vue';

import main from '../sass/app.scss';

window.$ = window.jQuery = jQuery;

const app = new vue({
    el: '#app',
    components: {Tasks}
});