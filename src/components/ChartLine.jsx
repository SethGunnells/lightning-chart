import css from './chartLine.scss';

import { Component } from 'react';

////////////////////////////////////////////////////////////////////////////////

const NBSP = '\u00a0';

export default class ChartLine extends Component {

  constructor() {
    super();

    var updatePositions = this.updatePositions.bind(this);
    this.componentDidMount = updatePositions;
    this.componentDidUpdate = updatePositions;
  }

  /*
   * This function uses absolute positioning to attach a chord
   * to its anchoring letter in the lyrics
   */
  updatePositions() {

    if (this.props.line.chords) {
      var positions = this.props.line.chords.map(function (chord) {
        return chord.position;
      });

      for (let i = 0; i < positions.length; i++) {
        let p = positions[i];
        let chord = React.findDOMNode(this.refs['chord' + p]);
        let anchor = React.findDOMNode(this.refs['anchor' + p]);

        chord.style.left = anchor.offsetLeft + 'px';
      }
    }
  }

  render() {
    var chords = this.props.line.chords;
    var lyrics = this.props.line.lyrics;

    // If there are no chords for this line, just render the lyrics
    if (!chords) {
      return (
        <div className={"lc-line " + css.line}>
          <div className={"lc-lyrics " + css.lyrics}>{lyrics}</div>
        </div>
      );
    }

    var chordElements = [];
    var lyricElements = [];
    var prevPos = -1;

    for (let i = 0; i < chords.length; i++) {
      let chord = chords[i].chord;
      let pos = chords[i].position;

      // Calculate substring before current anchor point
      let beforeStart = prevPos + 1;
      let beforeEnd = pos - beforeStart;
      let before = lyrics.substr(beforeStart, beforeEnd);
      if (before !== '') {
        lyricElements.push(before);
      }

      let anchor = lyrics.charAt(pos);
      if (anchor === ' ') {
        anchor = NBSP;
      }

      chordElements.push(
        <span className={"lc-chord " + css.chord} ref={'chord' + pos}>{chord}</span>
      );

      // This is to prevent the "chords" element from collapsing
      chordElements.push(
        <span>{NBSP}</span>
      );

      lyricElements.push(
        <span className={css.anchor} ref={'anchor' + pos}>{anchor}</span>
      );

      // If this is the last chord to be rendered, figure out the remaining
      // lyrics and append them to the output
      if (i === chords.length - 1) {
        let afterStart = pos + 1;
        let afterEnd = lyrics.length - pos;
        let after = lyrics.substr(afterStart, afterEnd);

        if (after !== '') {
          lyricElements.push(after);
        }
      }

      prevPos = pos;
    }

    return (
      <div className={"lc-line " + css.line}>
        <div className={"lc-chords " + css.chords}>{chordElements}</div>
        <div className={"lc-lyrics " + css.lyrics}>{lyricElements}</div>
      </div>
    );

  }

}
