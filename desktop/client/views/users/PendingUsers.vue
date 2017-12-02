<template>
  <div>
    <vue-good-table
    title="Utilizadores pendentes"
    :columns="columns"
    :rows="rows"
    :paginate="true"
    :lineNumbers="true"
    :globalSearch="true"
    :onClick="onClickRow"
    styleClass="table table-bordered table-striped condensed"/>
  </div>
</template>

<script>
export default {

  data () {
    return {
      columns: [
        {
          label: 'Nome',
          field: 'name'
        },
        {
          label: 'Email',
          field: 'email',
          type: 'number'
        }
      ],
      rows: [],
      onClickRow: function (row, index) {
        this.$router.push({path: '/utilizador/' + row.id})
      }
    }
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

    this.axios.get(this.address + 'users')
    .then(function (response) {
      var users = response.data.users
      var rows = []

      for (var i = 0; i < users.length; i++) {
        if (!users[i].awaitsConfirmation) {
          continue
        }

        var name = users[i].firstName + ' ' + users[i].lastName
        var email = users[i].email
        var id = users[i].id

        rows.push({name: name, email: email, id: id})
      }

      self.rows = rows
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}
</script>

<style lang="scss">
.table-responsive {
  display: block;
  width: 100%;
  min-height: .01%;
  overflow-x: auto;
}
</style>
