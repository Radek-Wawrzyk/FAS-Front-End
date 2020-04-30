<template>
  <div>
    <navigation />
    <main class="main-page">
      <transition name="fade-page" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
const Navigation = () => import('@/components/Navigation/Navigation.vue');

export default {
  name: 'DefaultLayout',
  components: {
    Navigation,
  },
};
</script>

<style lang="scss" src="./styles/main.scss" />
