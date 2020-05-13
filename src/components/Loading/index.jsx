import React,{Component} from 'react';
import { BlockLoading } from 'zent';
import './index.module.scss'

class Loading extends Component {
  constructor(props){
    super(props)
    this.state={
      loading: false
    }
  }
  
  componentWillMount(){
  }

  render(props) {
    return (
      <BlockLoading  loading={ this.state.loading } icon="circle" iconSize={64} iconText="加载中" />
    )
  }
}

export default Loading
