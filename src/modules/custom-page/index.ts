import { StorefrontModule } from '@vue-storefront/core/lib/modules'
const CustomPage = () => import(/* webpackChunkName: "vsf-my-account" */ './Page.vue')

export const CustomPageModule: StorefrontModule = ({ router }) => {
  router.addRoutes([
    {
      name: 'custom-page',
      path: '*/my-account/custom-page',
      component: CustomPage
    }
  ])
}
