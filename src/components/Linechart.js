import React from 'react'
import { Line } from 'react-chartjs-2';

import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)


function Linechart() {
    const data = {
    labels:['A','B','C','D','E','F','G','H','I','J','K','L'],
    datasets:[
      {
        label:"12 H ",
        data:[10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
        borderColor:'green',
        tension:0.4,
        fill:true,
        pointStyle:'circle',
        pointBorderColor:'blue',
        pointBackgroundColor:'#fff',
        backgroundColor: 'purple',
        showLine:true
      },
      {
        label:"1D",
        data:[10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
        borderColor:'green',
        tension:0.4,
        fill:true,
        pointStyle:'circle',
        pointBorderColor:'blue',
        pointBackgroundColor:'#fff',
        backgroundColor: 'blue',
        showLine:true
      },
      {
        label:"1W",
        data:[10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
        borderColor:'green',
        tension:0.4,
        fill:true,
        pointStyle:'circle',
        pointBorderColor:'blue',
        pointBackgroundColor:'#fff',
        backgroundColor: 'red',
        showLine:true
      },
      {
        label:"1M",
        data:[10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
        borderColor:'green',
        tension:0.4,
        fill:true,
        pointStyle:'circle',
        pointBorderColor:'blue',
        pointBackgroundColor:'#fff',
        backgroundColor: 'green',
        showLine:true
      },
      {
        label:"1Y",
        data:[10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
        borderColor:'green',
        tension:0.4,
        fill:true,
        pointStyle:'circle',
        pointBorderColor:'blue',
        pointBackgroundColor:'#fff',
        backgroundColor: 'pink',
        showLine:true
      },
      {
        label:"2Y",
        data:[10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
        borderColor:'green',
        tension:0.4,
        fill:true,
        pointStyle:'circle',
        pointBorderColor:'blue',
        pointBackgroundColor:'#fff',
        showLine:true
      },
      {
        label:"5Y",
        data:[10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
        borderColor:'green',
        tension:0.4,
        fill:true,
        pointStyle:'circle',
        pointBorderColor:'blue',
        pointBackgroundColor:'#fff',
        backgroundColor: 'yellow',
        showLine:true
      },
      {
        label:"10Y",
        data:[10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
        borderColor:'green',
        tension:0.4,
        fill:true,
        pointStyle:'circle',
        pointBorderColor:'blue',
        pointBackgroundColor:'#fff',
        showLine:true
      }
    ]
  }

    const options = {
        plugins: {
            title:{
                display: true,
                text:'USD to INR chart'
            },
            ticks:{
                min: 0,
                max: 0,
                stepSize : 1
            }
        } 
    }
  return (
      <Line data = {data} options = {options}/>
  )
}

export default Linechart




