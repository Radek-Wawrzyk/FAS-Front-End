<template>
  <div class="page questions-page" v-if="item && categoryName">
    <sub-header
      title="Please choose a subcategory."
      :text="categoryName"
    />
    <div class="container container--small">
      <ul
        class="questions__listing"
        v-if="!emptyList"
      >
        <category-link
          v-for="category in item.childrens"
          :key="category.id"
          :category="category"
        />
      </ul>
      <p class="no-results" v-else-if="emptyList && !error">
        No questions...
      </p>
      <p class="no-results" v-else>
        {{ error }}
      </p>
      <el-button
        type="primary"
        icon="el-icon-arrow-left el-icon-left"
        class="questions-page__back"
        @click="goBack()"
      >
        Back
      </el-button>
    </div>
  </div>
</template>

<script>
import question from '@/API/services/question';
const CategoryLink = () => import('@/components/CategoryLink/CategoryLink.vue');
const SubHeader = () => import('@/components/SubHeader/SubHeader.vue');

export default {
  name: 'QuestionsPage',
  data: () => ({
    item: null,
    categoryName: null,
    error: null,
  }),
  watch: {
    $route() {
      this.fetchItems();
    },
  },
  components: {
    CategoryLink,
    SubHeader,
  },
  methods: {
    goBack() {
      this.isNestedRoute ? this.$router.go(-1) : false;
    },
    async fetchItems() {
      const loading = this.$loading({
        lock: true,
      });
      try {
        const { data } = await question.fetchQuestion(this.$route.params.id);

        this.item = data.item;
        this.categoryName = data.item.choiceText;
        this.error = null;
        loading.close();
      } catch(err) {
        this.error = 'Sever problem...'
        loading.close();
        this.$notify({
          title: 'Error',
          message: 'There is a server error!',
          type: 'error'
        });
      };
    },
  },
  created() {
    this.fetchItems();
  },
  computed: {
    emptyList() {
      if (this.item) {
        return this.item.childrens.length <= 0;
      }
    },
    isNestedRoute() {
      return (
        this.$route.fullPath.includes("answers") ||
        this.$route.fullPath.includes("questions") ||
        !this.$route.name.includes("index")
      );
    },
  },
};
</script>

<style lang="scss" src="./Questions.scss" />
