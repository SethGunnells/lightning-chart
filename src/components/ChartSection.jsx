import ChartLine from './ChartLine';

////////////////////////////////////////////////////////////////////////////////

const ChartSection = ({
  section
}) => {

  var title = null;
  if (section.title) {
    title = (
      <h2 className="lc-chart-section-title">
        {section.title.toUpperCase()}
      </h2>
    );
  }

  return (
    <div className="lc-chart-section">
      {title}
      <div>
        {section.lines.map(function(line) {
          return <ChartLine line={line}/>;
        })}
      </div>
    </div>
  );

};
