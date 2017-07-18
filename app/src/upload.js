import 'babel-polyfill';
import Vue from 'vue';
import Upload from './Upload.vue';
import store from './Upload/store.js';
import Icon from 'vue-awesome/components/Icon.vue'

Vue.component('icon', Icon);

new Vue({
  el: '#upload',
  store,
  render: h => h(Upload),
  beforeCreate() {
    this.$store.dispatch('config/fetch');
  }
});

window.PSITRANSFER_VERSION = PSITRANSFER_VERSION;
