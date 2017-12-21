import * as types from '../../mutation-types'
import lazyLoading from './lazyLoading'
import uifeatures from './uifeatures'
import components from './components'
import users from './users'

// show: meta.label -> name
// name: component name
// meta.label: display label

const state = {
  items: [
    {
      name: 'Dashboard',
      path: '/dashboard',
      meta: {
        icon: 'fa-tachometer',
        link: 'dashboard/index.vue'
      },
      component: lazyLoading('dashboard', true)
    },
    users,
    {
      name: 'Axios',
      path: '/axiosDemo',
      meta: {
        auth: true,
        icon: 'fa-rocket',
        link: 'axios/index.vue'
      },
      component: lazyLoading('axios', true)
    },
    {
      name: 'Charts',
      path: '/charts',
      meta: {
        icon: 'fa-bar-chart-o',
        expanded: false,
        link: 'charts/index.vue'
      },
      component: lazyLoading('charts', true)
    },
    uifeatures,
    components,
    {
      name: 'Tables',
      path: '/tables',
      meta: {
        icon: 'fa-table',
        expanded: false,
        link: 'tables/index.vue'
      },
      component: lazyLoading('tables', true)
    }
  ]
}

const mutations = {
  [types.EXPAND_MENU] (state, menuItem) {
    if (menuItem.index > -1) {
      if (state.items[menuItem.index] && state.items[menuItem.index].meta) {
        state.items[menuItem.index].meta.expanded = menuItem.expanded
      }
    } else if (menuItem.item && 'expanded' in menuItem.item.meta) {
      menuItem.item.meta.expanded = menuItem.expanded
    }
  }
}

export default {
  state,
  mutations
}
