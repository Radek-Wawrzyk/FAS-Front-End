<template>
  <div class="not-found">
    <div class="container container--small">
      <h1 class="not-found__heading">
        404.
      </h1>
      <p class="not-found__text">
        Page not found :(
      </p>
      <el-button type="primary" @click="goHome()">
        Back to home
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView',
  methods: {
    goHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped src="./NotFound.scss" />
