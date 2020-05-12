import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setCount,} from '../redux/actions'
import styles from './home.module.scss';
import { Button } from 'zent';
import {login} from '../api/user';

class Home extends Component {
  constructor (props){
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    console.log(this.props)
  }
  doLogin = () =>{
    login();
  }
  render() {
    const { PayIncrease,tiger } = this.props;
    return (
      <div className={`${styles.test}`}>
        <h2>reducer:{tiger}</h2>
        <Button type="success"  onClick={PayIncrease}>dispatch</Button>
        <Button onClick={ this.doLogin }>请求接口</Button>
      </div>
    );
  }
}
//需要渲染什么数据
const mapStateToProps = (state)=> {
  return {
    tiger: state.count
  }
}
//需要触发什么行为
const mapDispatchToProps = (dispatch) => {
  return {
    PayIncrease: () => dispatch(setCount(99999)),
  }
}

export default Home = connect(mapStateToProps, mapDispatchToProps)(Home)