<template>
  <div class="answer-page" v-if="answer">
    <sub-header
      title="Question and answer"
    />
    <div class="container container--small">
      <div class="information">
        <h2 class="information__question">
          {{ answer.choiceText }}
        </h2>
        <h2 class="information__answer">
          {{ answer.answerText }}
        </h2>
      </div>
      <div class="feedback">
        <!-- <h3 class="feedback__heading">
          Did this solve your problem?
        </h3>
        <div class="feedback__actions">
          <el-button type="success" icon="el-icon-check" circle></el-button>
          <el-button type="danger" icon="el-icon-close" circle></el-button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import question from '@/API/services/question';
const SubHeader = () => import('@/components/SubHeader/SubHeader.vue');

export default {
  name: "AnswerView",
  data: () => ({
    answer: null,
    error: null,
  }),
  components: {
    SubHeader,
  },
  async created() {
    const loading = this.$loading({
      lock: true,
    });
    try {
      const { data } = await question.fetchQuestion(this.$route.params.id);
      this.answer = data.item;
      this.error = null;
      loading.close();
    } catch(err) {
      this.error = 'Server problem...'
      loading.close();
    };
  },
};
</script>

<style lang="scss" src="./Answers.scss" />
