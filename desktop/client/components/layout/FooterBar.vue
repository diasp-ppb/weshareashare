<template>
  <footer class="footer">
    <div class="container">
      <div v-if="adminEmail === null" class="content has-text-centered disclaimer" style="margin-left: 0px;">
        <p>©2017 Stoik Management Ltd. all rights reserved. | <a :href="'http://stoikcapital.com/disclaimer'">Disclaimer</a></p>
      </div>
      <div v-if="adminEmail !== null" class="content has-text-centered disclaimer" style="margin-left: 180px;">
        <p>©2017 Stoik Management Ltd. all rights reserved. | <a :href="'http://stoikcapital.com/disclaimer'">Disclaimer</a></p>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  computed: mapGetters({
    adminEmail: 'adminEmail'
  }),

  data () {
    return this.$store.state.pkg
  }

}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/mixins';

.footer {

  @include mobile() {
    margin-left: 0;
  }

  .social a {
    border-bottom: none !important;
  }

  .fa.fa-heart {
    color: red;
  }

  .disclaimer p a {
    color: #ffaf00;
  }
}
</style>
