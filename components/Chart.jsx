import React from 'react'
import { useState } from 'react'
import BarChart from '../components/BarChart'
import { DataOne, DataTwo } from '../data';

import Stats from '../components/Stats'
import Menu from '../components/Menu'

function Chart() {
    
    const [userData, setUserData] = useState({
        labels: DataOne.map((data) => data.title),
        datasets: [
          {
            label: "2021 Expenses",
            borderRadius: 10,
            data: DataOne.map((data) => data.amount),
            backgroundColor: DataOne.map((data) => data.color),
            borderColor: [
              'rgba(52, 172, 224, 1)',
            ],
            borderWidth: 3,
          },
          {
            label: "2022 Expenses",
            borderRadius: 10,
            data: DataTwo.map((data) => data.amount),
            backgroundColor: DataTwo.map((data) => data.color),
            borderColor: [
              'rgba(46, 213, 115, 1)',
            ],
            borderWidth: 3,
          },  
        ]
    })
      
    return (
        <div>     
            <div className="w-screen h-screen flex flex-col items-center ">
              <div className="w-screen h-28 flex items-center justify-between px-8 py-2">
                <h1 className=" text-4xl font-extralight">General Fund Expenses 2021-2022</h1>
                <div className="w-1/4">
                  <Menu />
                </div>
              </div>
              <div className="w-9/12 h-auto flex flex-col items-center justify-between">
                <BarChart chartData={userData}/>
               
                <Stats />                
              </div>
            </div>      
        </div>
    )
}

export default Chart