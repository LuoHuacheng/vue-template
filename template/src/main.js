// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
{{#router}}
import router from './router';
{{/router}}
{{#vuex}}
import store from './store';
{{/vuex}}
{{#plugin}}
import * as Filters from './plugins/filters';
{{/plugin}}

import './styles/common.css';
{{#mobile}}
import './styles/common.styl';
{{/mobile}}

{{#plugin}}
// 注册过滤器
Object.keys(Filters).forEach((key) => {
  Vue.filter(key, Filters[key]);
});
{{/plugin}}

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
  store,
  {{/router}}
  components: { App },
  template: '<App/>',
});
