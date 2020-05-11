import React, { Component } from 'react';
import { Button,Input } from 'zent';
import styles from './login.module.scss';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:'',
      password:''
    }
  }

  componentDidMount = () =>{
    console.log(this)
  }
  onChange = (e) =>{
    this.setState({ [e.target.name]: e.target.value })
  }
  login = () =>{
    console.log(this.state);
  }
  render() {
    return (
      <div className={`${styles.test}`} >
        <Input placeholder="请输入用户名" name="name" value={this.state.name} onChange={ this.onChange } showClear></Input>
        <Input placeholder="请输入密码" name="password" type="password" value={this.state.password} onChange={ this.onChange } style={{marginTop:10}} showClear></Input>
        <Button onClick={this.login} type="primary" block style={{marginTop:10}} >登录</Button>
      </div>
    );
  }
}

export default Login