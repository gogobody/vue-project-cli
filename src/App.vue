<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
@import './styles/common.scss';

.router-fade-leave-active,
.router-fade-enter-active {
  transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave {
  opacity: 0;
}
</style>
