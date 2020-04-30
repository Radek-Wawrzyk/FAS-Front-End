<template>
  <div class="answer-question" v-if="question">
    <div class="container container--extra-small">
      <h1 class="dashboard-page__heading">
        Answer an question
      </h1>
      <div class="answer-question__info">
        <div class="answer-question__row">
          User's address email:
          <span>{{ question.email }}</span>
        </div>
        <div class="answer-question__row">
          User's title:
          <span>{{ question.title }}</span>
        </div>
        <div class="answer-question__row">
          User's question:
          <span>{{ question.message }}</span>
        </div>
        <div class="answer-question__row">
          <el-input
            v-if="question.answerText"
            type="textarea"
            v-model="question.answerText"
            label="Answer"
            placeholder="Enter answer"
            :rows="6"
          >

          </el-input>
          <el-input
            type="textarea"
            v-else
            v-model="answerText"
            label="Answer"
            placeholder="Enter answer"
            :rows="6"
          >

          </el-input>
        </div>
        <div class="answer-question__row">
          <el-button
            type="primary"
            @click="saveQuestion()"
          >
            {{ question.isAnswered ? 'Edit question' : 'Save question' }}
          </el-button>
          <el-button
            @click="back()"
          >
            Cancel
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import question from '@/API/services/question';

export default {
  name: 'AnswerQuestionPage',
  data: () => ({
    question: null,
    error: null,
    answerText: ''
  }),
  methods: {
    async saveQuestion() {
      try {
        const response = await question.saveQuestion({
          answerText: this.answerText,
          id: this.$route.params.id,
        });

        this.$notify({
          title: 'Success',
          message: 'You have saved this question, it will directily email user!',
          type: 'success'
        });

        // After 1.5s redirect to the dashboard page
        setTimeout(() => {
          this.$router.push('/dashboard');
        }, 1500);
      } catch(err) {
        console.log(err);
      }
    },
    back() {
      this.$router.push('/dashboard');
    },
  },
  async created() {
    const loading = this.$loading({
      lock: true,
    });
    try {
      const { data } = await question.fetchNewQuestion(this.$route.params.id);

      this.question = data.question;
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

<style lang="scss" scoped src="./AnswerQuestion.scss" />
