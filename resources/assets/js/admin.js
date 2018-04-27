/* Components */
import jQuery from 'jquery';
import 'metismenu';
import vue from 'vue';
import role from './components/admin/Role.vue';

/* CSS */
import '../sass/admin.scss';

window.$ = window.jQuery = jQuery;

$().ready(function () {
    $("#side-menu").metisMenu();

    $(window).bind("load resize", function () {
        let topOffset = 50;
        let width = ((this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.height) - 1;
        if (width < 768) {
            $("div.navbar-collapse").addClass('collapse');
            topOffset = 100;
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        let height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    let url = window.location;
    let element = $('ul.nav a').filter(function () {
        return this.href == url;
    }).addClass('active').parent();

    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }
});

const app = new vue({
    el: '#app',
    components: {role}
});