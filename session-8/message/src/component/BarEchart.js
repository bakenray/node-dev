import React from 'react'
import Chart from 'rc-echarts'
const BarEcharts = function(props){
    const barOptions = {
        title:{
            show:true,
            text:'个人借阅量统计',
            textStyle:{
                color:'#1c95ea'
            }
        },
        tooltip:{},
        legend:{
            data:['借阅量']
        },
        aAxis:{
            data:props.data.name || '',
            name:'姓名',
            nameLocation:'end',
            nameTextStyle:{
                color:'#1c95ea',
                fontWeight:'bold'
            },
            nameGap:30
        },
        vAxis:{
            name:'借阅量',
            nameLocation:'end',
            nameTextStyle:{
                color:'#1c95ea',
                fontWeight:'bold'
            },
            nameGap:15
        }
    }
    const barSeries = {
        name:'借阅量',
        type:'bar',
        data:props.data.count || '',
        itemStyle:{
            normal:{
                color:'#1c95ea',
                barBorderRadius:[5,5,0,0]
            },
            emphasis:{
                color:'#045e9d'
            }
        },
        barGap:'50%'
    }
    return (
        <Chart {...barOptions}>
            <Chart.Bar {...barSeries}/>
        </Chart>
    )
}
export default BarEcharts;