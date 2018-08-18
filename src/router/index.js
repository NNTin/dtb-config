import Vue from 'vue'
import Router from 'vue-router'
import BookList from '@/components/BookList'
import ShowBook from '@/components/ShowBook'
import CreateBook from '@/components/CreateBook'
import EditBook from '@/components/EditBook'
import BridgeList from '@/components/BridgeList'
import ShowBridge from '@/components/ShowBridge'
import CreateBridge from '@/components/CreateBridge'
import EditBridge from '@/components/EditBridge'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/book-list',
      name: 'BookList',
      component: BookList
    },
    {
      path: '/show-book/:id',
      name: 'ShowBook',
      component: ShowBook
    },
    {
      path: '/add-book',
      name: 'CreateBook',
      component: CreateBook
    },
    {
      path: '/edit-book/:id',
      name: 'EditBook',
      component: EditBook
    },
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
