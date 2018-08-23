import Vue from 'vue'
import Router from 'vue-router'
import BridgeList from '@/components/BridgeList'
import ShowBridge from '@/components/ShowBridge'
import CreateBridge from '@/components/CreateBridge'
import EditBridge from '@/components/EditBridge'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/bridge-list',
      name: 'BridgeList',
      component: BridgeList
    },
    {
      path: '/show-bridge/:id',
      name: 'ShowBridge',
      component: ShowBridge
    },
    {
      path: '/add-bridge',
      name: 'CreateBridge',
      component: CreateBridge
    },
    {
      path: '/edit-bridge/:id',
      name: 'EditBridge',
      component: EditBridge
    }
  ]
})
