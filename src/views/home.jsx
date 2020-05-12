import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setCount,} from '../redux/actions'
import styles from './home.module.scss';
import { Button } from 'zent';

class ReduxTest extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    const { PayIncrease,tiger } = this.props;
    return (
      <div className={`${styles.test}`}>
        <h2>当月工资为{tiger}</h2>
        <Button type="success" onClick={PayIncrease}>升职加薪</Button>
      </div>
    );
  }
}
//需要渲染什么数据
function mapStateToProps(state) {
  return {
    tiger: state.count
  }
}
//需要触发什么行为
function mapDispatchToProps(dispatch) {
  return {
    PayIncrease: () => dispatch(setCount(99999)),
  }
}

export default ReduxTest = connect(mapStateToProps, mapDispatchToProps)(ReduxTest)