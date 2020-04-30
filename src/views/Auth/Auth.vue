<template>
  <div class="auth-page">
    <div class="container">
      <ValidationObserver
        class="auth-page__form"
        @submit.prevent
        tag="form"
        ref="observer"
      >
        <h1 class="auth-page__logo">
          <span>FAS</span> system
        </h1>
        <ValidationProvider
          rules="required"
          v-slot="{ errors }"
          name="login"
          class="auth-page__form-group"
          tag="div"
        >
          <el-input
            placeholder="Login"
            v-model="login"
          />
          <transition name="fade">
            <span class="auth-page__form-error" v-if="errors[0]">
              {{ errors[0] }}
            </span>
          </transition>
        </ValidationProvider>
        <ValidationProvider
          rules="required"
          v-slot="{ errors }"
          name="password"
          class="auth-page__form-group"
          tag="div"
        >
          <el-input
            placeholder="Password"
            v-model="password"
            type="password"
          />
          <transition name="fade">
            <span class="auth-page__form-error" v-if="errors[0]">
              {{ errors[0] }}
            </span>
          </transition>
        </ValidationProvider>
        <div class="auth-page__form-group">
          <el-button
            type="primary"
            native-type="submit"
            @click="submitForm()"
          >
            Login
          </el-button>
        </div>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthPage',
  data: () => ({
    login: '',
    password: '',
  }),
  methods: {
    async sendRequest() {
      await this.$store.dispatch('login', {
        login: this.login,
        password: this.password,
      });
    },
    async submitForm() {
      const isValid = await this.$refs.observer.validate();
      isValid ? this.sendRequest() : false;
    },
  },
};
</script>

<style lang="scss" scoped src="./Auth.scss" />
