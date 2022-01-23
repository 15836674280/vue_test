import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入VueRouter
import VueRouter from 'vue-router'
//三级联动组件----全局组件
import TypeNav from '@/pages/Home/TypeNav'
//第一个参数：全局组件的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav);
//引入路由器
import router from './router'
//test
import { reqgetCategoryList } from '@/api'
reqgetCategoryList();

//关闭Vue的生产提示
Vue.config.productionTip = false

//应用饿了么UI插件
Vue.use(ElementUI);
//应用路由插件
Vue.use(VueRouter);

new Vue({
    render: h => h(App),
    router: router,
}).$mount('#app')