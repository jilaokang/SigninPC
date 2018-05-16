// survey
import surveySituation from './views/componet/survey/situation'
import surveyCollege from './views/componet/survey/college'
import surveyFaculty from './views/componet/survey/faculty';
import surveyClassBlock from './views/componet/survey/classBlock'
import surveyStudent from './views/componet/survey/student'
import surveyTeach from './views/componet/survey/teach'

// evaluation
import evaluatManage from './views/componet/evalueation/manage'
import evaluatTeach from './views/componet/evalueation/teach'
import evaluatTeachers from './views/componet/evalueation/teachers'

// Wechat
import weixinUser from './views/componet/weixin/user'
import weixinPush from './views/componet/weixin/push'
import weixinMessage from './views/componet/weixin/message'

import login from './views/componet/login/login'
import home from './views/componet/home/home'
import deal from './views/componet/deal/deal'

import error404 from './views/componet/error/404'

const routers = [{
    path: '/',
    meta: {
        title: '整体概况'
    },
    component: (home) => require(['./views/componet/index.vue'], home),
    children: [{
        path: '/',
        component: home
    }, {
        path: "/surveysituation",
        component: surveySituation
    }, {
        path: "/surveycollege",
        component: surveyCollege
    }, {
        path: "/surveyfaculty",
        component: surveyFaculty
    }, {
        path: "/surveyclassblock",
        component: surveyClassBlock
    }, {
        path: "/surveystudent",
        component: surveyStudent
    }, {
        path: "/surveyteach",
        component: surveyTeach
    }, {
        path: '/evaluatmanage',
        component: evaluatManage
    }, {
        path: '/evaluatteach',
        component: evaluatTeach
    }, {
        path: '/evaluatteachers',
        component: evaluatTeachers
    }, {
        path: '/weixinuser',
        component: weixinUser
    }, {
        path: '/weixinpush',
        component: weixinPush
    }, {
        path: '/weixinmessage',
        component: weixinMessage
    }, {
        path: '/deal',
        component: deal
    }]
}, {
    path: "/login",
    component: login
}, {
    path: "*",
    component: error404
}];

export default routers;