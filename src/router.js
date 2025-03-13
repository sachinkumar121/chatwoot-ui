import { createRouter, createWebHistory } from 'vue-router';
import ViewWithHeader from './components/layouts/ViewWithHeader.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/unread-messages',
      name: 'unread-messages',
      component: () => import('./views/UnreadMessages.vue'),
    },
    {
      path: '/campaigns',
      name: 'campaigns',
      component: () => import('./views/Campaigns.vue'),
    },
    {
      path: '/',
      component: ViewWithHeader,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('./views/Home.vue'),
        },
        {
          path: '/prechat-form',
          name: 'prechat-form',
          component: () => import('./views/PreChatForm.vue'),
        },
        {
          path: '/messages',
          name: 'messages',
          component: () => import('./views/Messages.vue'),
        },
        {
          path: '/article',
          name: 'article-viewer',
          component: () => import('./views/ArticleViewer.vue'),
        },
      ],
    },
    {
      path: '/widget',
      component: ViewWithHeader,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('./views/Home.vue'),
        },
        {
          path: '/prechat-form',
          name: 'prechat-form',
          component: () => import('./views/PreChatForm.vue'),
        },
        {
          path: '/messages',
          name: 'messages',
          component: () => import('./views/Messages.vue'),
        },
        {
          path: '/article',
          name: 'article-viewer',
          component: () => import('./views/ArticleViewer.vue'),
        },
      ],
    },
    {
      path: '/widget-test',
      name: '/widget-test',
      component: () => import('./views/WidgetTest.vue'),
    }
  ],
});
