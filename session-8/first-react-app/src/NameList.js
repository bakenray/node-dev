// 引入React
import React,{Component} from 'react';

// 构建类
class NameList extends Component {
    // 构造函数
    constructor(){
        super();
        // 定义初始化的state
        this.state = {show:true}
    }
    del = ()=>{
        this.setState({show:false})
    }
    // 定义render方法
    render(){
        // 定义样式
        const style = {
            display:'inline-block',
            width:'100px',
            paddingRight:'20px',
            height:'50px',
        };
        // 根据state的值判断是否显示
        if(this.state.show){
            return (
                <div>
                    <span style={style}>{this.props.username}</span>
                    <span style={style}>{this.props.age}</span>
                    <input type="button" onClick={this.del} value="删除"/>
                </div>
            )
        }
        else{
            return null;
        }
    }
}
// 导出类
export default NameList;