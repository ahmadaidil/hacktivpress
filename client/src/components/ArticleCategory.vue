<template>
  <div class="col-md-9">
    <div class="list-group">
      <router-link v-for="(c, index) in category" :key="index" class="list-group-item" :to="'/article/' + article._id">
        <h4 class="list-group-item-heading">{{c.title}}</h4>
        <p class="list-group-item-text">{{c.content}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState([
      'category'
    ])
  },
  methods: {
    ...mapActions([
      'getCategory'
    ])
  },
  mounted () {
    this.getCategory(this.category)
  },
  watch: {
    category (newCategory) {
      this.getCategory(newCategory)
    }
  }
}
</script>

<style>

</style>
