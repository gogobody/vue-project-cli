<template>
  <div id="app">
    <!-- 渐变动画 -->
    <!-- <transition name="router-fade" mode="out-in">
      <router-view/>
    </transition> -->
    <!-- 翻页动画 -->
    <transition :css="!!direction" :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
      <router-view/>
    </transition>
    <loading v-model="isLoading" text=""></loading>
  </div>
</template>

<script>
import { Loading } from 'vux'
export default {
  name: "App",
  components: {
    Loading
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading
    },
    direction() {
      return this.$store.state.direction
    },
  },
};
</script>

<style lang="scss">
@import './styles/common.scss';
// 渐变动画
.router-fade-leave-active,
.router-fade-enter-active {
  transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave {
  opacity: 0;
}
// 翻页动画
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 250ms;
  height: 100%;
  top: 0;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}

.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
