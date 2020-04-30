<template>
  <div class="page ask-page">
    <sub-header
      title="Ask an question"
      text="If you have any question, feel free to submit the form!"
    />
    <div class="container container--small">
      <ValidationObserver
        class="ask-page__form"
        @submit.prevent
        tag="form"
        ref="observer"
      >
        <div class="ask-page__form-group">
          <ValidationProvider
            rules="required"
            v-slot="{ errors }"
            name="Title"
          >
            <el-input
              placeholder="Title"
              v-model="title"
              type="text"
            />
            <transition name="fade">
              <span class="ask-page__form-error" v-if="errors[0]">
                {{ errors[0] }}
              </span>
            </transition>
          </ValidationProvider>
        </div>
        <div class="ask-page__form-group">
          <ValidationProvider
            rules="required|email"
            v-slot="{ errors }"
            name="Email address"
          >
            <el-input
              placeholder="E-mail"
              v-model="email"
              type="text"
            />
            <transition name="fade">
              <span class="ask-page__form-error" v-if="errors[0]">
                {{ errors[0] }}
              </span>
            </transition>
          </ValidationProvider>
        </div>
        <div class="ask-page__form-group">
          <ValidationProvider
            rules="required"
            v-slot="{ errors }"
            name="Message"
          >
            <el-input
              placeholder="Message"
              v-model="message"
              type="textarea"
              :rows="6"
            />
            <transition name="fade">
              <span class="ask-page__form-error" v-if="errors[0]">
                {{ errors[0] }}
              </span>
            </transition>
          </ValidationProvider>
        </div>
        <div class="ask-page__form-group">
          <el-button
            type="primary"
            @click="submitForm()"
            native-type="submit"
          >
            Submit
          </el-button>
        </div>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import question from '@/API/services/question';
const SubHeader = () => import('@/components/SubHeader/SubHeader.vue');

export default {
  name: 'AskPage',
  data: () => ({
    title: '',
    email: '',
    message: '',
    isAnswered: false,
  }),
  components: {
    SubHeader,
  },
  methods: {
    async sendRequest() {
      try {
        const response = await question.askNewQuestion({
          title: this.title,
          email: this.email,
          message: this.message,
          isAnswered: this.isAnswered,
          answerText: '',
        });

        this.$notify({
          title: 'Success',
          message: 'You have sent the message!',
          type: 'success'
        });
      } catch (err) {
        console.log(err);
        this.$notify({
          title: 'Error',
          message: 'There is a server error!',
          type: 'error'
        });
      }
    },
    async submitForm() {
      const isValid = await this.$refs.observer.validate();
      isValid ? this.sendRequest() : false;
    },
  }
};
</script>

<style lang="scss" src="./Ask.scss" />
