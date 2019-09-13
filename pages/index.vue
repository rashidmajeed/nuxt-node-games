<template>
  <div>
 <Banner />
    <section class="section">
      <div class="container">
        <h1 class="title">Top Video Games</h1>
        <div class="columns">
          <div class="column is-one-quarter">
          <GameCard />
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title">Featured Articles</h1>
        <div class="columns">
          <div class="column is-one-quarter">
         <ArticleCard />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import GameCard  from '~/components/shared/GameCard'
import ArticleCard from '~/components/shared/ArticleCard'
import Banner from '~/components/shared/Banner'

export default {
  components: {
    Banner,
    GameCard,
    ArticleCard
  }
}
</script>

<style scoped lang="scss">
  // card item
  
  // card item end

  // Home page
  .links {
    padding-top: 15px;
  }
</style>