# lightning-viewer
Quick-updating, web-based chord chart viewer.

This React component seeks to solve one of the major nuisances for musicians
looking for charts on the web: crappy charts. The internet is flooded with them.
My hope is that providing a flexible and fast component that will display charts
based on a well-defined JSON structure will help solve this problem.

## The Data
The following is a definition of the JSON data structure used by
Lightning Viewer.

### title: string
The title of the song this chart describes.

### writers: array of strings (optional)
The writers who composed the song, not the artist who performed it.

### performer: string
The artist whose arrangement or performance this song describes.

### defaultKey: string
Lightning Viewer has the ability to change keys to suit the user's preference,
but each song needs a reference key from which to start.

### sections: array of section objects
This property describes the various sections in the order that they should
appear on the chart.

#### section.title: string (optional)
The title of the section.

#### section.lines: array of line objects
Describes the various combinations of chords and lyrics that make up a section.
They will appear in the same order as the elements in the array.

#### line.lyrics: string
These lyrics should represent a single line on the chart.

#### line.chords: array of chord objects
These chords will be positioned over certain parts of the lyrics based on their
provided position. For example, if a chord has a position of 7, it will be positioned over the seventh character in the lyrics.

#### chord.chord: string
This is the chord itself, e.g. Am7, F#maj7b5, 6-.

#### chord.position: number
Determines which character over which this chord will be positioned.

    {
      title: 'Test Song',
      writers: ['John Doe', 'Sam Hill', 'Sara Stewart'],
      performer: 'Hotwork',
      defaultKey: 'E',

      sections: [
        {
          title: 'Verse 1',
          lines: [
            {
              chords: [
                { chord: 'E', position: 0 },
                { chord: 'A', position: 10 },
                { chord: 'B', position: 22 }
              ],
              lyrics: "This is a line in my test song and it's not meant to be sung as is"
            },
            {
              chords: [
                { chord: 'A', position: 10 },
                { chord: 'C#m', position: 33 },
                { chord: 'C', position: 41 }
              ],
              lyrics: 'Line number two happens here and not much is going on'
            },
            {
              lyrics: "This line doesn't have any chords, oh no"
            },
            {
              chords: [
                { chord: 'E', position: 0 },
                { chord: 'F#maj7b5', position: 15 },
                { chord: 'G#m7', position: 32 },
                { chord: 'C#m9', position: 45 }
              ],
              lyrics: "This line isn't particularly long but it should be long enough"
            }
          ]
        },
        {
          title: 'Chorus',
          lines: [
            {
              chords: [
                { chord: 'E', position: 0 },
                { chord: 'B', position: 30 }
              ],
              lyrics: 'This is the first line of the chorus'
            },
            {
              chords: [
                { chord: 'A', position: 10 },
                { chord: 'C#m', position: 23 }
              ],
              lyrics: "So please don't let is bore us"
            },
            {
              chords: [
                { chord: 'F#maj7b5', position: 15 }
              ],
              lyrics: "Yeah, don't let it bore us, chorus!"
            }
          ]
        },
        {
          title: 'Verse 2',
          lines: [
            {
              chords: [
                { chord: 'Emaj7', position: 0 },
                { chord: 'A', position: 21 },
                { chord: 'F#m13', position: 34 }
              ],
              lyrics: "The beginning of the second verse sure ain't the end"
            },
            {
              chords: [
                { chord: 'A', position: 10 },
                { chord: 'C#m', position: 43 }
              ],
              lyrics: "You could say it's only the beginning, but you'd be wrong"
            },
            {
              chords: [
                { chord: 'G#m', position: 0 }
              ],
              lyrics: 'This is a quick line'
            },
            {
              chords: [
                { chord: 'E', position: 0 },
                { chord: 'Amaj7', position: 15 },
                { chord: 'B7', position: 32 }
              ],
              lyrics: "This line carries some weight since it's the last one"
            }
          ]
        },
        {
          lines: [
            {
              chords: [
                { chord: 'A', position: 0 },
                { chord: 'B7', position: 13 }
              ],
              lyrics: 'Super catchy tag line'
            }
          ]
        }
      ]
    }
