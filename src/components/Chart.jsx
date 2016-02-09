import css from "../styles/chart.scss";

import React from 'react';
import ChartSection from './ChartSection';

export default class Chart extends React.Component {

  render() {
    var chart = this.props.chart;

    return (
      <div className={css.chart}>
        <h1 className={css['chart-title']}>{chart.title}</h1>
        <div className={css['chart-writers']}>{chart.writers.join(', ')}</div>

        {chart.sections.map(function(section) {
          return <ChartSection section={section}/>;
        })}
      </div>
    );
  }

}
