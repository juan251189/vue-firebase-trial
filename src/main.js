import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);
//this is to create a root url and dont repeat for every request get or post or whatever Vue.http.options.root='https://trial-ea03e-default-rtdb.firebaseio.com/data.json'
Vue.config.productionTip = false
Vue.http.interceptors.push((request,next) =>{
  if (request.method =='POST'){
    request.method = 'PUT';
  }
  next();
});
new Vue({
  render: h => h(App),
}).$mount('#app')
