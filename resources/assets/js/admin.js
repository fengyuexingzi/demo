/* Components */
import jQuery from 'jquery';
import vue from 'vue';
import role from './components/admin/Role.vue';

/* CSS */
import '../sass/admin.scss';

window.$ = window.jQuery = jQuery;

const app = new vue({
    el: '#app',
    components: {role}
});