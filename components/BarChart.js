import React from 'react';
import  { Bar } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

function BarChart({chartData}) {
  return (
    <Bar 
      data={chartData} 
      options={{
        scales: {
          y: {
            title: {
              display: true,
              text: 'Amount in Dollars ($)',
              font: {
                family: 'Arial',
                size: 15,
                lineHeight: 1.2,
              },
              padding: {top: 0, left: 0, right: 0, bottom: 20}
            }
          },
          x: {
            ticks: {              
              font: {
                family: 'Arial',
                size: 12,
                lineHeight: 1,
              },
            }
          }
        }     
      }}
    />
  )
}

export default BarChart