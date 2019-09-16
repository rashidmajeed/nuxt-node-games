<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by2">
        <img :src="game.image" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{game.title}}</p>
          <p class="subtitle is-6">
            <i>{{game.interestedUser.name}}</i>
          </p>
        </div>
      </div>
      <div class="content">
        {{game.subtitle}}
        <br />
      </div>
      <div class="price-box">
        <span class="price">{{game.price}}$</span>
        <span class="disc-price">{{game.discountedPrice}}$</span>
      </div>
    </div>
    <footer class="card-footer">
      <nuxt-link :to="''" class="card-footer-item">Learn More</nuxt-link>
      <a target="_" :href="'#'" class="card-footer-item">Buy</a>
    </footer>
  </div>
</template>
<!-- getting props of game -->
<script>
export default {
  props: {
    game: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss">
.card-image:hover {
  cursor: pointer;
  opacity: 0.9;
}
.price-box {
  text-align: right;
  .price {
    color: gray;
    font-size: 16px;
    text-decoration: line-through;
  }
  .disc-price {
    font-size: 21px;
    font-weight: bold;
  }
}
</style>