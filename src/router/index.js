import Vue from 'vue'
import Router from 'vue-router'
import UserIndex from '@/components/Users/Index'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
import UserCreate from '@/components/Users/CreateUser'

import SpeakerIndex from '@/components/Speaker/Index'
import SpeakerEdit from '@/components/Speaker/EditSpeaker'
import SpeakerShow from '@/components/Speaker/ShowSpeaker'
import SpeakerCreate from '@/components/Speaker/CreateSpeaker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/speakers',
      name: 'speakers',
      component: SpeakerIndex
    },
    {
      path: '/speaker/create',
      name: 'speaker-create',
      component: SpeakerCreate
    },{
      path: '/speaker/edit/:speakerId',
      name: 'speaker-edit',
      component: SpeakerEdit
    },
    {
      path: '/speaker/:speakerId',
      name: 'speaker',
      component: SpeakerShow
    },
    

  ]
})