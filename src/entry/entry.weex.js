
/*global Vue*/
import App from '../app/app.cml';
import store from '../store/index.js';
import router from '../router.js';
import cml from '../api/index.js';
import routerConfig from '../router.config.json';


//global.$router命令  禁止删除
global.$router = router;

/* weex initialized here, please do not move this line */
new Vue(Vue.util.extend({el: '#root', router, store}, App));
