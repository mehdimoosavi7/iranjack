import { FaEllipsisH } from "react-icons/fa";
import { Link } from "react-router-dom";

interface ChartProps {
  title?: string;
  subtitle?: string;
  chart?: JSX.Element;
}

const Chart: React.FC<ChartProps> = ({ title, subtitle, chart }) => {
  return (
    <div className="chartBox">
      <div className="chartBox-header">
        <div>
          <span className="chartBox-title">{title}</span>
          <span className="chartBox-subtitle">{subtitle}</span>
        </div>
        <span className="chartBox-options-btn">
          <FaEllipsisH color="#242424" size={16} />
        </span>
      </div>
      <div className="chartBox-chart">{chart}</div>
      <div className="chartBox-footer">
        <Link className="chartBox-footer-link" to="/">
          View details
        </Link>
      </div>
    </div>
  );
};

export default Chart;
