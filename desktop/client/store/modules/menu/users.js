import lazyLoading from './lazyLoading'

export default {
  meta: {
    label: 'Utilizadores',
    icon: 'fa-user-circle',
    expanded: false
  },

  children: [
    {
      name: 'Inscritos',
      path: '/utilizadores/inscritos',
      meta: {
        link: 'users/RegisteredUsers.vue'
      },
      component: lazyLoading('users/RegisteredUsers')
    },
    {
      name: 'Pendentes',
      path: '/utilizadores/pendentes',
      meta: {
        link: 'users/PendingUsers.vue'
      },
      component: lazyLoading('users/PendingUsers')
    }
  ]
}
