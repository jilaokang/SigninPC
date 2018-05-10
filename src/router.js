import messageContent from './views/survey/messageContent'
import situation from './views/survey/situationContent'
import appmanger from './views/appmanger/appmangerContent'

import error404 from './views/error/404'

import login from './views/login/login'

import searchphone from './views/appmanger/applist/searchPhoneContent'

const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve),
    children: [{
        path: '/survey/message',
        component: messageContent
    }, {
        path: "/survey/situation",
        component: situation
    }, {
        path: "/survey/appmanger",
        component: appmanger,
        children: [{
            path: "/survey/appmanger/searchphone",
            component: searchphone

        }]
    }]
}, {
    path: "/login",
    component: login
},{
    path:"*",
    component:error404
}];

export default routers;