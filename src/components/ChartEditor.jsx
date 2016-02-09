import React from 'react';

export default class ChartEditor extends React.Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    if (this.props.onEdit) {
      this.props.onEdit(event.target.value);
    }
  }

  render() {
    return (
      <div>
        <textarea rows="10" className="chart-editor"
                  onInput={this.handleInput}/>
      </div>
    );
  }
}
