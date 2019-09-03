import MiniHorn from './horn';
import MiniHornItem from './horn-item';

function install(Vue) {
  Vue.component('MiniHorn', MiniHorn);
  Vue.component('MiniHornItem', MiniHornItem);
}

export default {install, MiniHorn, MiniHornItem};
export {
  install, MiniHorn, MiniHornItem
}
