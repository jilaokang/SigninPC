import appmanger from './views/componet/appmanger/appmanger'

import message from './views/componet/survey/message'
import situation from './views/componet/survey/situation'
import college from './views/componet/survey/college'
import faculty from './views/componet/survey/faculty';
import classBlock from './views/componet/survey/classBlock'
import student from './views/componet/survey/student'
import teach from './views/componet/survey/teach'

import error404 from './views/componet/error/404'

import home from './views/componet/home/home'

import login from './views/componet/login/login'

import searchphone from './views/componet/appmanger/applist/searchPhoneContent'

const routers = [{
    path: '/',
    meta: {
        title: '整体概况'
    },
    component: (home) => require(['./views/index.vue'], home),

    children: [{
        path: '/',
        component: home
    }, {
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
    }, {
        path: "/teach",
        component: teach
    }]
}, {
    path: "/login",
    component: login
}, {
    path: "*",
    component: error404
}];

export default routers;