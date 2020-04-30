<template>
  <li class="category-link">
    <router-link
      :to="linkDirection"
      :aria-label="category.choiceText"
      :title="category.choiceText"
      class="category-link__inner"
    >
      {{ category.choiceText }}
    </router-link>
  </li>
</template>

<script>
export default {
  name: "CategoryLink",
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  computed: {
    linkDirection() {
      return this.category.answerText.length > 1 &&
        this.category.answerText !== "Dummy"
        ? `/answers/${this.category._id}`
        : `/questions/${this.category._id}`;
    },
  },
};
</script>

<style lang="scss" src="./CategoryLink.scss" />
