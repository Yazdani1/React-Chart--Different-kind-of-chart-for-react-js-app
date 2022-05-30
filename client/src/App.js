import React from "react";
import LineChartDemo from "./components/LineChart";
import PieChartDesign from "./components/PieChart";
import BarChartDesign from "./components/BarChartDesign";

const App = () => {
  return (
    <React.Fragment>
      <LineChartDemo />
      <PieChartDesign />
      <BarChartDesign />
    </React.Fragment>
  );
};
export default App;
