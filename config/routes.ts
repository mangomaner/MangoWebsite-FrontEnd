export default [

  {
    path: '/user',
    menuRender: false,
    layout: false,
    routes: [
      { name: '登录', path: '/user/login', component: './user/Login' },
      { name: '注册', path: '/user/register', component: './user/Register' },
      { component: './404' },
    ],
  },
  {
    path: '/test',
    name: '首页',
    layout: 'top',
    component: './test/index',
  },
  {
    path: '/album',
    name: '相册',
    layout: 'top',
    component: './album/index',

  },
  {
    path: '/album/bml',
    layout: 'top',
    component: './album/bmlPage/index',
  },
  {
    path: '/album/bw',
    layout: 'top',
    component: './album/bwPage/index',
  },
  {
    path: '/message',
    name: '消息',
    access: 'canCode6666',
    component: './message'
  },
  {
    path: '/welcome',
    name: '个人中心',
    icon: 'smile',
    component: './Welcome'
  },
  {
    path: '/about',
    component: './about'
  },
  {
    path: '/blog',
    component: './BLOG',

  },
  {
    path: '/blog/blog1',
    component: './BLOG/page/blog1',

  },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      { path: '/admin/user-manage', name: '用户管理', icon: 'smile', component: './Admin/UserManage' },
      //{ path: '/admin/sub-page', name: '二级管理页', icon: 'smile', component: './Welcome' }, //指定欢迎页
      { component: './404' },
    ],
  },
  { //name: '查询表格',
    icon: 'table', path: '/list', component: './TableList'
  },
  { path: '/', redirect: '/welcome' },
  { component: './404' },
];








