import login from '../views/login';
import home from '../views/home';

export const routerConfig = [
  {
    path:'/',
    component:home,
    auth:true,
  },{
    path:'/login',
    component:login,
  }
];


