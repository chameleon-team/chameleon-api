
import App from '../app/app.cml';
import store from '../store/index.js';
import router from '../router.js';
/**
 * can register Global Web Vue Components here
 */
//window.$router命令  禁止删除
window.$router = router;

const app = new Vue({
  el: '#root',
  router,
  store,
  render: h => h(App)
});
