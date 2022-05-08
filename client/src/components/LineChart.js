import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineChartDemo = () => {
  const [showdata, setShowdata] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts";
  const urlUser = "https://jsonplaceholder.typicode.com/users";

  const loadData = () => {
    fetch(urlUser, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        setShowdata(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

  useEffect(() => {
    loadData();
  }, []);

  return (
    <React.Fragment>
      <div className="container" style={{ marginTop: "30px" }}>
        <LineChart
          width={900}
          height={500}
          data={showdata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="username"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="email"
            stroke="red"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="id"
            stroke="blue"
            activeDot={{ r: 8 }}
          />

          <Line
            type="monotone"
            dataKey="address.geo.lng"
            stroke="blue"
            activeDot={{ r: 8 }}
          />
           <Line
            type="monotone"
            dataKey="address.geo.lat"
            stroke="orange"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>

      <div className="container">
        {showdata.map((item, i) => (
          <div className="card" style={{ margin: "10px", padding: "20px" }}>
            <h7>Name:-{item.name}</h7>
            <p>Username:-{item.username}</p>
            <p>E-mail:{item.email}</p>
            <h6>{item.address.street}</h6>
            <h6>{item.address.geo.lat}</h6>
            <h6>{item.address.length}</h6>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default LineChartDemo;
