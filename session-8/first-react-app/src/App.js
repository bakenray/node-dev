import React , {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {name:1234} 
  }

  // 要挂载
  componentWillMount(){
    console.log('willMount')
  }
  //组件挂载完成
  componentDidMount(){
    console.log('didmount')
  }
  // 组件是否应该更新
  shouldComponentUpdate(){
    console.log('shouldupdate')
    return true
  }
  // 组件将要更新
  componentWillUpdate(){
    console.log('willupdate')
  }
  componentDidUpdate(){
    console.log('didupdate')
  }
  // 定义render方法
  render(){
    console.log('render');
    return (
      <div className="App">   
        <input type="button" onClick={()=>{this.setState({name:2345})}} value="change" />   
      </div>
    )
  }
}

export default App;
