<template>
  <nav class="navbar is-active" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <h1 class="brand-title">
          <img src="../../assets/images/brandlogo.png" />
        </h1>
      </nuxt-link>
      <!-- Adds click to open -->
      <!-- Adds active class -->
      <a
        @click="() => {}"
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <!-- Adds active class -->
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link to="/" class="navbar-item">Home</nuxt-link>
        <nuxt-link to="#" class="navbar-item">About</nuxt-link>
        <nuxt-link to="#" class="navbar-item">Games</nuxt-link>
        <nuxt-link to="#" class="navbar-item">Articles</nuxt-link>
        <nuxt-link to="#" class="navbar-item">Copyright</nuxt-link>
        <nuxt-link to="#" class="navbar-item">Contact</nuxt-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <!-- If Authenticated -->
            <template v-if="isAuth">
              <figure class="image avatar is-48x48 m-r-sm">
                <img class="is-rounded" :src="user.avatar" />
              </figure>
              <div class="m-r-sm m-b-sm">Welcome {{user.username}}!</div>
              <!-- If Admin -->
              <button v-if="isAdmin" class="button is-link is-outlined" @click="() => {}">Admin</button>
              <a class="button is-primary" @click="logout">Logout</a>
            </template>
            <template v-else>
              <nuxt-link to="/register" class="button is-primary">Sign up</nuxt-link>
              <nuxt-link to="/login" class="button is-light">Log in</nuxt-link>
            </template>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      user: "auth/authUser",
      isAuth: "auth/isAuthenticated",
      isAdmin: "auth/isAdmin"
    })
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout').then(() => this.$router.push('/login'))
    }
  }
};
</script>

<style lang="scss" scoped>
.brand-title {
  margin-top: 13px;
  font-size: 38px;
  font-weight: bold;
}
.navbar-brand {
  padding-right: 30px;
}
.avatar {
  margin-right: 5px;
}
</style>