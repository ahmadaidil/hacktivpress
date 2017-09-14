<template>
  <div class="col-md-9">
    <div class="list-group">
      <div v-for="(c, index) in category" :key="index" class="list-group-item">
        <h4 class="list-group-item-heading">{{c.title}}</h4>
        <p class="list-group-item-text">{{c.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  props: ['ct'],
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
    this.getCategory(this.ct)
  },
  watch: {
    ct (newCategory) {
      this.getCategory(newCategory)
    }
  }
}
</script>

<style>

</style>
