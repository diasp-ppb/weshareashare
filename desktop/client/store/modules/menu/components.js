import lazyLoading from './lazyLoading'

export default {
  path: '/components',
  meta: {
    icon: 'fa-building-o',
    expanded: false,
    label: 'Components'
  },
  component: lazyLoading('components', true),

  children: [
    {
      name: 'Components',
      path: '',
      component: lazyLoading('components/Default'),
      meta: {
        link: 'components/Default.vue'
      }
    },
    {
      name: 'BackToTop',
      path: 'backToTop',
      meta: {
        description: 'Jump component is based on jump.js',
        repository: 'https://github.com/vue-bulma/jump',
        link: 'components/BackToTop.vue'
      },
      component: lazyLoading('components/BackToTop')
    },
    {
      name: 'Collapse',
      path: 'collapse',
      meta: {
        description: 'Collapse component',
        repository: 'https://github.com/vue-bulma/collapse',
        link: 'components/Collapse.vue'
      },
      component: lazyLoading('components/Collapse')
    },
    {
      name: 'Datepicker',
      path: 'datepicker',
      meta: {
        description: 'Datepicker component is based on flatpickr',
        repository: 'https://github.com/vue-bulma/datepicker',
        link: 'components/Datepicker.vue'
      },
      component: lazyLoading('components/Datepicker')
    },
    {
      name: 'Message',
      path: 'message',
      meta: {
        description: 'Message component',
        repository: 'https://github.com/vue-bulma/message',
        link: 'components/Message.vue'
      },
      component: lazyLoading('components/Message')
    },
    {
      name: 'Modal',
      path: 'modal',
      meta: {
        description: 'Modal component',
        repository: 'https://github.com/vue-bulma/modal',
        link: 'components/Modal.vue'
      },
      component: lazyLoading('components/Modal')
    },
    {
      name: 'Notification',
      path: 'notification',
      meta: {
        description: 'Notification component',
        repository: 'https://github.com/vue-bulma/notification',
        link: 'components/Notification.vue'
      },
      component: lazyLoading('components/Notification')
    },
    {
      name: 'Quill',
      path: 'quill',
      meta: {
        description: 'Your powerful, rich text editor',
        repository: 'https://github.com/vue-bulma/quill',
        link: 'components/Quill.vue'
      },
      component: lazyLoading('components/Quill')
    },
    {
      name: 'Slider',
      path: 'slider',
      meta: {
        description: 'Slider component',
        repository: 'https://github.com/vue-bulma/slider',
        link: 'components/Slider.vue'
      },
      component: lazyLoading('components/Slider')
    },
    {
      name: 'Switch',
      path: 'switch',
      meta: {
        description: 'Switch component',
        repository: 'https://github.com/vue-bulma/switch',
        link: 'components/Switch.vue'
      },
      component: lazyLoading('components/Switch')
    },
    {
      name: 'Tabs',
      path: 'tabs',
      meta: {
        description: 'Tabs component',
        repository: 'https://github.com/vue-bulma/tabs',
        link: 'components/Tabs.vue'
      },
      component: lazyLoading('components/Tabs')
    },
    {
      name: 'Tooltip',
      path: 'tooltip',
      meta: {
        description: 'Tooltip component is based on hint.css',
        repository: 'https://github.com/vue-bulma/tooltip',
        link: 'components/Tooltip.vue'
      },
      component: lazyLoading('components/Tooltip')
    }
  ]
}
