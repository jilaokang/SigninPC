import appmanger from './views/appmanger/appmanger'

import message from './views/survey/message'
import situation from './views/survey/situation'
import college from './views/survey/college'
import faculty from './views/survey/faculty';
import classBlock from './views/survey/classBlock'
import student from './views/survey/student'
import teach from './views/survey/teach'

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
        path: '/message',
        component: message
    }, {
        path: "/situation",
        component: situation
    }, {
        path: "/appmanger",
        component: appmanger,
        children: [{
            path: "/appmanger/searchphone",
            component: searchphone

        }]
    }, {
        path: "/college",
        component: college
    }, {
        path: "/faculty",
        component: faculty
    }, {
        path: "/classBlock",
        component: classBlock
    }, {
        path: "/student",
        component: student
    },{
        path:"/teach",
        component:teach
    }]
}, {
    path: "/login",
    component: login
}, {
    path: "*",
    component: error404
}];

export default routers;