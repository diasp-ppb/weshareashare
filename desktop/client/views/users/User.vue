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
              <div v-if="data.user.awaitsConfirmation">
                <a class="button is-success modal-button" @click="onValidateClick">
                  <span class="icon">
                    <i class="fa fa-check"></i>
                  </span>
                  <span>Validar</span>
                </a>
                <modal :visible="showModal" @close="closeModalBasic"></modal>
              </div>
              <div v-else>
                Utilizador com plano de subscrição ativado.
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
import Modal from '../components/modals/Modal'

export default {
  components: {
    Modal
  },
  data () {
    return {
      data: {
        user: {
          firstName: '',
          lastName: '',
          email: '',
          awaitsConfirmation: ''
        }
      },
      showModal: false
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
      self.data.user.awaitsConfirmation = response.data.user.awaitsConfirmation
    })
    .catch(function (error) {
      console.log(error)
    })
  },
  methods: {
    openModalBasic () {
      this.showModal = true
    },
    closeModalBasic () {
      this.data.user.awaitsConfirmation = false
      this.showModal = false
    },
    onValidateClick: function (event) {
      let self = this
      this.axios({
        method: 'post',
        url: this.address + 'validateUser',
        data: {
          userid: this.$route.params.id
        },
        headers: {
          'client-id': this.clientId
        }
      })
      .then(function (response) {
        self.showModal = true
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
