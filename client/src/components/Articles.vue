<template>
  <div class="col-md-9">
    <div class="list-group">
      <router-link v-for="(article, index) in articles" :key="index" class="list-group-item" :to="'/article/' + article._id">
        <h4 class="list-group-item-heading">{{article.title}}</h4>
        <p class="list-group-item-text">{{article.content}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState([
      'articles'
    ])
  },
  methods: {
    ...mapActions([
      'getArticles'
    ])
  },
  mounted () {
    this.getArticles()
  }
}
</script>

<style>

</style>
