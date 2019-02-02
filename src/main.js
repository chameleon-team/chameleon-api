/** 非小程序端启动入口, 无特殊需求不建议修改 */
import runtime from 'chameleon-runtime';
import app from './app/app.cml';
import store from './store/index.js';

runtime.bootstrap({app, store});

