import request from './index'

export function login(data){
  return request.post('/login',{a:1});
}
