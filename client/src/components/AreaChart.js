import React, { useEffect, useState } from "react";

const AreaChart = () => {
  const [list, setList] = useState([]);

  const data = [
    {
      name: "Page A",
      uv: 400,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 300,
      pv: 1398,
      amt: 210,
    },
    {
      name: "Page C",
      uv: 20,
      pv: 980,
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
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 10,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stackId="3"
            stroke="#888477"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="amt"
            stackId="1"
            stroke="#ffc655"
            fill="#ffc658"
          />
          <Area
            type="monotone"
            dataKey="amt"
            stackId="1"
            stroke="#ffc655"
            fill="#ffc658"
          />
          <Area
            type="monotone"
            dataKey="amt"
            stackId="1"
            stroke="#ffc655"
            fill="#ffc658"
          />
        </AreaChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
};

export default AreaChart;
