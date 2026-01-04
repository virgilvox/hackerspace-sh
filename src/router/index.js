import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import IframeWrapper from '../components/IframeWrapper.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/zine',
    name: 'zine',
    component: IframeWrapper,
    meta: {
      url: 'https://lumencanvas.nyc3.cdn.digitaloceanspaces.com/artifacts/hackerspace-zine.html',
      title: 'The Hackerspace Game'
    }
  },
  {
    path: '/governance',
    name: 'governance',
    component: IframeWrapper,
    meta: {
      url: 'https://hackerspaceinabox.netlify.app/',
      title: 'Governance in a Box'
    }
  },
  {
    path: '/space-after-dark',
    name: 'space-after-dark',
    component: IframeWrapper,
    meta: {
      url: 'https://lumencanvas.nyc3.cdn.digitaloceanspaces.com/artifacts/hackerspace/space_dynamics.html',
      title: 'The Space After Dark'
    }
  },
  {
    path: '/proposal-duel',
    name: 'proposal-duel',
    component: IframeWrapper,
    meta: {
      url: 'https://lumencanvas.nyc3.cdn.digitaloceanspaces.com/artifacts/hackerspace/proposal-duel.html',
      title: 'Proposal Duel'
    }
  },
  {
    path: '/atlas',
    name: 'atlas',
    component: IframeWrapper,
    meta: {
      url: '/atlas.html',
      title: 'Hackerspace Atlas'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
