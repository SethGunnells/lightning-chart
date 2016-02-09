import "../styles/chart.scss";

import React from 'react';
import ChartSection from './ChartSection';

export default class Chart extends React.Component {

  render() {
    var chart = this.props.chart;

    return (
      <div className="chart">
        <h1 className="chart-title">{chart.title}</h1>
        <div className="chart-writers">{chart.writers.join(', ')}</div>

        {chart.sections.map(function(section) {
          return <ChartSection section={section}/>;
        })}
      </div>
    );
  }

}
