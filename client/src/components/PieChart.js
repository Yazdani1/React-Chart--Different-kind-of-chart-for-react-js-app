import React from 'react'

const PieChart = () => {

    const data = [
        {
          name: "Page A",
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: "Page B",
          uv: 3000,
          pv: 1398,
          amt: 210,
        },
        {
          name: "Page C",
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: "Page D",
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: "Page E",
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: "Page F",
          uv: 2390,
          pv: 3800,
          amt: 500,
        },
        {
          name: "Page G",
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    

  return (
   <React.Fragment>
       <h5>Pie Chart</h5>
   </React.Fragment>
  )
}

export default PieChart