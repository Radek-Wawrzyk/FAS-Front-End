<template>
  <div class="page questions-page" v-if="item">
    <sub-header
      title="Please choose a category."
      text="All"
    />
    <div class="container container--small">
      <ul
        class="questions__listing"
        v-if="!error"
      >
        <category-link
          v-for="category in item.childrens"
          :key="category._id"
          :category="category"
        />
      </ul>
      <p class="no-results" v-else>
        {{ error }}
      </p>
    </div>
  </div>
</template>

<script>
import question from '@/API/services/question';
const CategoryLink = () => import('@/components/CategoryLink/CategoryLink.vue');
const SubHeader = () => import('@/components/SubHeader/SubHeader.vue');

export default {
  name: 'HomePage',
  data: () => ({
    item: null,
    error: null,
  }),
  components: {
    CategoryLink,
    SubHeader,
  },
  async created() {
    const loading = this.$loading({
      lock: true,
    });
    try {
      const { data } = await question.fetchQuestion('1');
      this.item = data.item;
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
};
</script>

