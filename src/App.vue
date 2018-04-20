<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <router-view/>
    </transition>
    <loading v-model="isLoading" text=""></loading>
  </div>
</template>

<script>
import { Loading } from 'vux'
export default {
  name: "app",
  components: {
    Loading
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading
    },
  },
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
