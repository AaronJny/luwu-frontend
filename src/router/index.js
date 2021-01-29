/*
 * @Date         : 2020-12-31 13:29:11
 * @Author       : AaronJny
 * @LastEditTime : 2021-01-28
 * @FilePath     : /luwu-frontend/src/router/index.js
 * @Desc         : 
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Login from '@/views/Login'
import LuwuImageClassifyView from '@/components/LuwuImageClassifyView'
import LuwuTrainProjectView from '@/components/LuwuTrainProjectView'
import CodeEditorView from '@/components/CodeEditorView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/home',
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '/',
          component: LuwuImageClassifyView
        },
        {
          path: 'image_classify',
          name: 'image_classify',
          component: LuwuImageClassifyView
        },
        {
          path: 'train_project',
          name: 'train_project',
          component: LuwuTrainProjectView
        },
        {
          path: 'editor/:id',
          name: 'editor',
          component: CodeEditorView
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
