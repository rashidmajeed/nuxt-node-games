<template>
  <div>
    <banner />
    <section class="section">
      <div class="container">
        <h1 class="title">Top Video Games</h1>
        <div class="columns">
          <div v-for="game in games" :key="game._id" class="column is-one-quarter">
            <!-- pass a game as a prop to game-card -->
            <game-card :game="game" />
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title">Featured Articles</h1>
        <div class="columns">
          <div class="column is-one-quarter">
            <article-card />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import GameCard from "~/components/shared/GameCard";
import ArticleCard from "~/components/shared/ArticleCard";
import Banner from "~/components/shared/Banner";
import { mapState } from "vuex";

export default {
  components: {
    Banner,
    GameCard,
    ArticleCard
  },
  computed: {
    ...mapState({
      games: state => state.game.items
    })
  },
  async fetch({ store }) {
    await store.dispatch("game/fetchGames");
  }
};
</script>

<style scoped lang="scss">
// card item

// card item end

// Home page
.links {
  padding-top: 15px;
}
</style>