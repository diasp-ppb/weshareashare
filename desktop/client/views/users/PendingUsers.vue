<template>
  <div>
    <vue-good-table
    title="Utilizadores registados"
    :columns="columns"
    :rows="rows"
    :paginate="true"
    :lineNumbers="true"
    :globalSearch="true"
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
        },
        {
          label: 'Data de inscrição',
          field: 'joined',
          type: 'date',
          inputFormat: 'YYYYMMDD',
          outputFormat: 'MMM Do YYYY'
        }
      ],
      rows: [
        {name: 'John', email: 20, joined: '20120201'},
        {name: 'Jane', email: 24, joined: '20120305'},
        {name: 'Susan', email: 16, joined: '20140823'},
        {name: 'Chris', email: 55, joined: '20161109'},
        {name: 'Dan', email: 40, joined: '20170612'},
        {name: 'John', email: 20, joined: '20120201'},
        {name: 'Jane', email: 24, joined: '20120305'},
        {name: 'Susan', email: 16, joined: '20140823'},
        {name: 'Chris', email: 55, joined: '20161109'},
        {name: 'Dan', email: 40, joined: '20170612'},
        {name: 'John', email: 20, joined: '20120201'},
        {name: 'Jane', email: 24, joined: '20120305'},
        {name: 'Susan', email: 16, joined: '20140823'},
        {name: 'Chris', email: 55, joined: '20161109'},
        {name: 'Dan', email: 40, joined: '20170612'}
      ]
    }
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
