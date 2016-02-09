import React from 'react';
import ChartLine from './ChartLine';

export default class ChartSection extends React.Component {

  render() {
    var section = this.props.section;

    var title = null;
    if (section.title) {
      title = (
        <h2 className="chart-section-title">
          {section.title.toUpperCase()}
        </h2>
      );
    }

    return (
      <div className="chart-section">
        {title}
        <div>
          {section.lines.map(function(line) {
            return <ChartLine line={line}/>;
          })}
        </div>
      </div>
    );
  }

}
