import { BrowserRouter as Router } from "react-router-dom";
import Chart from "../../components/chart";
import ChartOne from "./components/chartOne";

const Charts = () => {
  return (
    <Router>
      <Chart title="Chart 1" subtitle="Description" chart={<ChartOne />} />
    </Router>
  );
};

export default Charts;
