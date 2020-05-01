<template>
  <nav class="navigation">
    <div class="navigation__container">
      <div class="navigation__col">
        <router-link
          to="/"
          aria-label="Home"
          title="Home"
        >
          <h2 class="navigation__logo">
            FAS
            <span> System</span>
          </h2>
        </router-link>
        <!-- <transition name="fade" mode="out-in">
          <el-button
            v-if="isNestedRoute"
            type="primary"
            icon="el-icon-arrow-left"
            class="navigation__back"
            @click="goBack()"
          >
            Back
          </el-button>
        </transition> -->
      </div>
      <button
        class="navigation__hamburger"
        :class="{ 'navigation__hamburger--active' : isMenuOpen }"
        :aria-expanded="isMenuOpen ? 'true' : 'false'"
        aria-label="Open Menu"
        aria-controls="menu"
        title="Open Menu"
        @click="toggleMenu()"
      >
        <transition name="fade">
          <span class="navigation__hamburger-text" :key="isMenuOpen">
            {{ isMenuOpen ? 'Close' : 'Menu' }}
          </span>
        </transition>
        <span class="navigation__hamburger-box">
          <span class="navigation__hamburger-line"></span>
        </span>
      </button>
      <div class="navigation__col">
        <ul class="navigation-menu" :class="{ 'navigation-menu--active' : isMenuOpen }">
          <li
            class="navigation-menu__item"
            v-for="(menuItem, index) in menu"
            :key="index"
            @click="closeMenu()"
          >
            <router-link
              :to="menuItem.link"
              :title="menuItem.name"
              :aria-label="menuItem.name"
              :class="{ 'navigation-menu__link--contact' : menuItem.name === 'Ask an question' }"
              class="navigation-menu__link"
            >
              {{ menuItem.name }}
            </router-link>
          </li>
          <li
            class="navigation-menu__item"
            v-if="isLogged"
            @click="closeMenu()"
          >
            <el-button
              type="danger"
              @click="logout()"
            >
              Logout
            </el-button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: "Navigation",
  data: () => ({
    isMenuOpen: false,
    menu: [
      {
        name: "Questions",
        link: "/"
      },
      {
        name: "About",
        link: "/about"
      },
      {
        name: "Dashboard",
        link: "/dashboard"
      },
      {
        name: "Ask a question",
        link: "/ask"
      },
    ]
  }),
  methods: {
    goBack() {
      this.isNestedRoute ? this.$router.go(-1) : false;
    },
    closeMenu() {
      this.toggleMenu();
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    logout() {
      this.$store.dispatch('logout');
    }
  },
  computed: {
    isLogged() {
      return this.$store.state.auth.token ? this.$store.state.auth.token : false;
    },
    isNestedRoute() {
      return (
        this.$route.fullPath.includes("answers") ||
        this.$route.fullPath.includes("questions")
      );
    }
  }
};
</script>

<style lang="scss" scoped src="./Navigation.scss"/>
