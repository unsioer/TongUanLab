import Vue from 'vue'
import { Container, Header, Row, Col, Link, Button, Dropdown, DropdownMenu, DropdownItem, Icon } from 'element-ui';
import App from './App.vue'

Vue.use(Container);
Vue.use(Header);
Vue.use(Row);
Vue.use(Col);
Vue.use(Link);
Vue.use(Button);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Icon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
