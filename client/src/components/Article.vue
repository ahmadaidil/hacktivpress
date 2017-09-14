<template>
  <div class="col-md-12">
    <div class="list-group">
      <div class="list-group-item">
        <h4 class="list-group-item-heading">{{article.title}}</h4>
        <p class="list-group-item-text">{{article.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  props: ['id'],
  computed: {
    ...mapState([
      'article'
    ])
  },
  methods: {
    ...mapActions([
      'getArticle'
    ])
  },
  mounted () {
    this.getArticle(this.id)
  },
  watch: {
    id (newId) {
      this.getArticle(newId)
    }
  }
}
</script>

<style>

</style>
