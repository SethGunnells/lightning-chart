import '../styles/default.scss';
import '../styles/alt.scss';
import css from "./chart.scss";

import React from 'react';
import ChartSection from './ChartSection';

export default class Chart extends React.Component {

  render() {
    var chart = this.props.chart;
    var style = this.props.styleName || 'default';

    return (
      <div className={"lc-chart lc-style-" + style + " " + css.chart}>
        <h1 className="lc-chart-title">{chart.title}</h1>
        <div className="lc-chart-writers">{chart.writers.join(', ')}</div>

        {chart.sections.map(function(section) {
          return <ChartSection section={section}/>;
        })}
      </div>
    );
  }

}
