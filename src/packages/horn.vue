<template>
  <div class="horn-container" ref="container">
    <div class="horn-wrap" ref="wrap" :style="{transition: moving ? `transform ${a_time}ms ease-in-out` : `none`,transform: translate3d}" :class="'horn-'+direction">
      <slot>
        <mini-horn-item>一天晚上</mini-horn-item>
        <mini-horn-item>两个骚棒</mini-horn-item>
        <mini-horn-item>三更半夜</mini-horn-item>
        <mini-horn-item>四处打望</mini-horn-item>
      </slot>
    </div>
  </div>
</template>

<script>
  import MiniHornItem from './horn-item';
  export default {
    components: {
      MiniHornItem
    },
    name: "horn",
    props: {
      direction: {
        type: String,
        default: 'vertical' // horizontal | vertical
      },
      cloneNode: {
        type: Number,
        default: 1
      }, // 暂时没用
      stepBlock: { // 每一次移动是以一块还是一步
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 2000
      },
      animationTime: {
        type:Number,
        default: 500
      }
    },
    data () {
      return {
        translate: 0,
        moving: false
      }
    },
    computed: {
      translate3d () {
        let x,y;
        if (this.direction === 'horizontal') {
          x = this.translate;
          y = 0;
        } else {
          x = 0;
          y = this.translate;
        }
        return `translate3d(${x}px, ${y}px, 0)`;
      },
      a_time () {
        return Math.min(this.interval, this.animationTime);
      }
    },
    methods: {
      calculateOffset () {
        const children = this.wrap.children;
        const d = this.direction === 'horizontal' ? 'offsetWidth' : 'offsetHeight';
        let max = 0;
        for (let i = 0; i < children.length; i++) {
          max += children[i][d];
        }
        this.maxScroll = max;
      },
      insertCloneNode () {
        const cloneNodes = this.wrap.cloneNode(true);
        const children = cloneNodes.children;
        const firstNode = children[0];
        const lastNode = children[children.length - 1];
        this.wrap.insertBefore(lastNode, this.wrap.children[0]);
        this.wrap.appendChild(firstNode);
      },
      initFirstStep () {
        const firstStep = this.wrap.children[0];
        const d = this.direction === 'horizontal' ? 'offsetWidth' : 'offsetHeight';
        this.firstOffset = firstStep[d];
        this.translate = -firstStep[d];
      },

      // 一块一块的走
      animateBlock (callback) {
        // 主要参数：时间 -> 多长时间移动一块
        const interval = Math.max(30, this.interval * 60 / 1000);
        const max_abs = this.firstOffset + this.maxScroll;
        let time = 0;
        const step = function () {
          time++;
          if (time % interval === 0) {
            this.moving = true;
            this.translate -= this.firstOffset;
            if (Math.abs(this.translate) >= max_abs) {
              setTimeout(() => {
                this.moving = false;
                this.translate = -this.firstOffset;
              }, this.a_time);
            }
          }
          requestAnimationFrame(step);
        }.bind(this);
        requestAnimationFrame(step);
      },

      // 一步一步的走
      animateStep (callback) {
        // 主要参数：步长 -> 单位时间内移动多长距离
        const _this = this;
        const stepOffset =  1; // 可以设定步长
        const max_abs = this.firstOffset + this.maxScroll;

        const step = function () {
          _this.translate -= stepOffset;
          if (Math.abs(_this.translate) >= max_abs) {
            _this.moving = false;
            _this.$nextTick(() => {
              _this.translate = -_this.firstOffset;
            })
          }
          requestAnimationFrame(step);
        };
        requestAnimationFrame(step)
      },
      init () {
        this.calculateOffset();
        this.insertCloneNode();
        this.initFirstStep();
        this.$nextTick(() => {
          const fnName = 'animate' + (this.stepBlock ? 'Block' : 'Step');
          this[fnName]();
        })
      }
    },
    mounted() {
      this.wrap = this.$refs.wrap;
      if (this.wrap.children.length) {
        this.init();
      }
    }
  }
</script>

<style scoped lang="less">
  .horn-container{
    color: #fff;
    width: 100px;
    height: 20px;
    overflow: hidden;
    font-size: 12px;
    border-radius: 10px;
    background-color: orangered;
    .horn-wrap{
      display: flex;
      &.horn-vertical{
        flex-direction: column;
      }
      &.horn-horizontal{
        flex-wrap: nowrap;
      }
    }
  }
</style>
