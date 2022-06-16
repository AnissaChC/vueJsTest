import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/home/HomePage.vue';
import RobotBuilder from '../components/build/RobotBuilder.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: HomePage,
        sidebar: () => import('../components/sidebars/SidebarStandard.vue'),
      },
    },
    {
      path: '/build',
      name: 'Build',
      components: {
        default: RobotBuilder,
        sidebar: () => import('../components/sidebars/SidebarBuild.vue'),
      },
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
      beforeEnter(to, from, next) {
        const isIdValid = Number.isInteger(Number(to.params.id));
        next(isIdValid);
      },
    },
  ],
});
