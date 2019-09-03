# mini-horn

一个小喇叭插件

展示：
![alt demo](/static/a.gif)

一、安装
```bash
  npm i mini-horn --save-dev
```

二、全局注册

```vue
import Vue from 'vue';
import MiniHorn from 'mini-horn';
Vue.use(MiniHorn);
```
三、局部注册
```vue
import {MiniHorn, MiniHornItem} from 'mini-horn';

export default {
  components: {
    MiniHorn,
    MiniHornItem
  }
}

```

四、调用方式
```vue
<template>
  <mini-horn>
    <mini-horn-item>一天晚上</mini-horn-item>
    <mini-horn-item>两个**</mini-horn-item>
    <mini-horn-item>三更半夜</mini-horn-item>
    <mini-horn-item>四处打望</mini-horn-item>
  </mini-horn>
</template>
```

五、属性

| 属性 | 默认值 | 作用 |
| :------: | :------: | :------ |
| direction | 'vertical' | String horizontal/vertical 横向或者纵向滚动 |
| stepBlock | true | Boolean true/false 小喇叭是否整块滚动 |
| interval | 2000 | Number stepBlock为true时有效 整块移动的时间间隔|
| animationTime | 500 | Number stepBlock为true时有效 整块移动，动画的时间 |

六、实例方法

refresh(); 当horn发生变化的时候可以手动调用来刷新mini-horn
