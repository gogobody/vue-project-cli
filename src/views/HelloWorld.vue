<template>
  <div v-show="requestState" class="hello">
   HelloWorld
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  computed: {
    chargeDetail() {
      return this.$store.getters.chargeDetail
    },
    requestState() {
      return this.$store.state.requestState;
    },
  },
  methods: {
    login() {
      let data = {
        phone: this.phone,
        code: this.code
      };
      this.$store.dispatch("Login", data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../styles/common.scss";
@import "../styles/util.scss";
.hello {
  width: rem(20);
}
</style>
