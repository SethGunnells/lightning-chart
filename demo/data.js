window.testData = {
  title: 'Test Song',
  writers: ['John Doe', 'Sam Hill', 'Sarah Stewart'],
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
};
