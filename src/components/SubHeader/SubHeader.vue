<template>
  <header class="sub-header">
    <div class="container">
      <h1 class="sub-header__title">
      {{ title }}
      </h1>
      <p class="sub-header__text">
        {{ text }}
      </p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SubHeader',
  props: {
    title: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped src="./SubHeader.scss" />
