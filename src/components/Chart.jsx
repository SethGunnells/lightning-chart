import '../styles/default.scss';
import css from "./chart.scss";

import ChartSection from './ChartSection';

////////////////////////////////////////////////////////////////////////////////

const Chart = ({
  chart,
  options = {}
}) => {
  var style = options.styleName || 'default';

  return (
    <div className={"lc-chart lc-style-" + style + " " + css.chart}>
      <h1 className="lc-chart-title">{chart.title}</h1>
      <div className="lc-chart-writers">{chart.writers.join(', ')}</div>

      {chart.sections.map(function(section) {
        return <ChartSection section={section}/>;
      })}
    </div>
  );
};

export default Chart;
