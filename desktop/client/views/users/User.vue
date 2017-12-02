<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-vertical">
        <div class="tile">
          <div class="tile is-parent is-3">
          </div>
          <div class="tile is-6 is-parent">
            <article class="tile is-child box">
              <p class="title">{{data.user.firstName + " " + data.user.lastName}}</p>
              <p class="subtitle">{{data.user.email}}</p>
              <div class="content">
                <p>Colocar botões para download dos pdfs?</p>
              </div>
            </article>
          </div>
          <div class="tile is-parent is-3">
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      data: {
        user: {
          firstName: 'Helder',
          lastName: 'Antunes',
          email: 'hant@gmail.com'
        }
      }
    }
  },
  mounted () {
    /* if (this.$auth.redirect()) {
      console.log('Redirect from: ' + this.$auth.redirect().from.name)
    } */
    // Can set query parameter here for auth redirect or just do it silently in login redirect.
  },
  computed: {
    clientId () {
      return this.$store.state.clientId
    },
    address () {
      return this.$store.state.address
    }
  },
  created () {
    var self = this
    this.axios.get(this.address + 'user?userid=' + this.$route.params.id)
    .then(function (response) {
      console.log(response.data)
      self.data.user.firstName = response.data.user.firstName
      self.data.user.lastName = response.data.user.lastName
      self.data.user.email = response.data.user.email
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
