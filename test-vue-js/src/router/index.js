import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../components/home/HomePage.vue';
import RobotBuilder from '../components/build/RobotBuilder.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/build',
      name: 'Build',
      component: RobotBuilder,
    },
    {
      path: '/partInfo/browse',
      name: 'BrowsePart',
      component: () => import('../components/parts/BrowsePart.vue'),
      children: [
        {
          path: 'arms',
          name: 'Arms',
          component: () => import('../components/parts/RobotArms.vue'),
        },
        {
          path: 'bases',
          name: 'Bases',
          component: () => import('../components/parts/RobotBases.vue'),
        },
        {
          path: 'heads',
          name: 'Heads',
          component: () => import('../components/parts/RobotHeads.vue'),
        },
        {
          path: 'torsos',
          name: 'Torsos',
          component: () => import('../components/parts/RobotTorsos.vue'),
        },
      ],
    },
    {
      path: '/partInfo/:partType/:id',
      name: 'PartInfo',
      component: () => import('../components/parts/PartInfo.vue'),
      props: true,
    },
  ],
});
