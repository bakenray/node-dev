import React from 'react';
import ajax from '../utils/ajax'
import PieEcharts from './PieEchart' //饼图
import BarEcharts from './BarEchart' //条形图
import htime from '../utils/htime'  //引入htime

// 定义图表组件
class MainRight extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            type:'pie',
            data:'',
            dataAfter:'',
            time:1,
            url:props.url,
        }
        this.changeBarType = this.changeBarType.bind(this)
        this.changePieType = this.changePieType.bind(this)
        this.changeDate = this.changeDate.bind(this)
    }

    // 更改为条形图的方法
    changeBarType(){
        if(this.state.type === 'pie'){
            this.setState({type:'bar'});
            this.parseBarData(this.state.data)
        }
    }
    // 更改时间段的方法
    changeDate(event){
        let that = this;
        let value = event.target.value;
        this.setState({time:value})
        let url;
        console.log('value:' + value)
        if(value === 1){
            url = this.props.url
        }else if(value === 2){
            let time = htime.getDiff(3*30)
            url = this.props.url + '?timeAfter=' + time
        }else if(value === 3){
            let time = htime.getDiff(6*30)
            url = this.props.url + '?timeAfter=' + time
        }else if(value === 4){
            let time = htime.getDiff(12*30)
            url = this.props.url + '?timeAfter=' + time        
        }else if(value === 5){ 
            url = this.props.url + '?timeAfter=1970-01-01'    
        }
        console.log('url:' + url)

        ajax('get',url,function(data){
            data = JSON.parse(data)
            that.setState({
                data:data,
                url:url
            })
            console.log(data);
            if(that.state.typt ==='pie'){
                that.parsePieData(data)
            }else{
                that.parseBarData(data)
            }
        })
    }
    // 更改为饼图的方法
    changePieType(){
        if(this.type.type === 'bar'){
            this.setState({type:'pie'})
            this.parsePieData(this.state.data)
        }
    }
    // 解析饼图数据的方法
    parsePieData(data){
        let dataAfter = []
        console.log(data.data)
        for(let i = 0; i < data.data.length; i++){
            dataAfter.push({
                name:data.data[i].name,
                value:data.data[i].count
            })
        }
        this.setState({dataAfter:dataAfter})
    }
    // 解析条形图数据的方法
    parseBarData(data){
        console.log(data)
        let dataAfter = {
            name:[],
            count:[]
        }
        for(let i =0;i<data.data.length;i++){
            dataAfter.name.push(data.data[i].name)
            data.After.count.push(parseInt(data.data[i].count))
        }
        this.setState({dataAfter:dataAfter})
    }
    // 组件将要挂载
    componentWillMount(){
        let that = this
        ajax('get',that.state.url,function(data){
            data = JSON.parse(data);
            that.setState({
                data:data
            })
            console.log(data)
            that.parsePieData(data)
        })
    }
    render(){
        return(
            <section className="main-right-charts">
                <section className="main-right-charts-btns clearfix">
                    <div className="main-right-charts-btns-type">
                        <span className={this.state.type === 'pie'?'active':''} onClick={this.changePieType}>饼状图</span>
                        <span className={this.state.type === 'bar'?'active':''} onClick={this.changeBarType}>条形图</span>
                    </div>
                    <div className="main-right-charts-btns-times">
                        <select name="charts-time" onChange={this.changeDate}>
                            <option value="1">一个月</option>
                            <option value="2">三个月</option>
                            <option value="3">半年</option>
                            <option value="4">一年</option>
                            <option value="5">全部</option>
                        </select>
                    </div>
                </section>
                {this.state.type === 'pie' ? <PieEcharts data={this.state.dataAfter} />:<BarEcharts data={this.state.dataAfter} />}
            </section>
        )
    }

}
export default MainRight