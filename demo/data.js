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
            { chord: 'E', position: 0, type: 'mid' },
            { chord: 'A', position: 10, type: 'mid' },
            { chord: 'B', position: 22, type: 'mid' }
          ],
          lyrics: "This is a line in my test song and it's not meant to be sung as is"
        },
        {
          chords: [
            { chord: 'D7', position: 0, type: 'pre' },
            { chord: 'A', position: 10, type: 'mid' },
            { chord: 'C#m', position: 33, type: 'mid' },
            { chord: 'C', position: 41, type: 'mid' }
          ],
          lyrics: 'Line number two happens here and not much is going on'
        },
        {
          lyrics: "This line doesn't have any chords, oh no"
        },
        {
          chords: [
            { chord: 'E', position: 0, type: 'mid' },
            { chord: 'F#maj7b5', position: 15, type: 'mid' },
            { chord: 'G#m7', position: 32, type: 'mid' },
            { chord: 'C#m9', position: 45, type: 'mid' }
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
            { chord: 'E', position: 0, type: 'mid' },
            { chord: 'B', position: 30, type: 'mid' }
          ],
          lyrics: 'This is the first line of the chorus'
        },
        {
          chords: [
            { chord: 'A', position: 10, type: 'mid' },
            { chord: 'C#m', position: 23, type: 'mid' }
          ],
          lyrics: "So please don't let is bore us"
        },
        {
          chords: [
            { chord: 'F#maj7b5', position: 15, type: 'mid' }
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
            { chord: 'Emaj7', position: 0, type: 'mid' },
            { chord: 'A', position: 21, type: 'mid' },
            { chord: 'F#m13', position: 34, type: 'mid' }
          ],
          lyrics: "The beginning of the second verse sure ain't the end"
        },
        {
          chords: [
            { chord: 'A', position: 10, type: 'mid' },
            { chord: 'C#m', position: 43, type: 'mid' }
          ],
          lyrics: "You could say it's only the beginning, but you'd be wrong"
        },
        {
          chords: [
            { chord: 'G#m', position: 0, type: 'mid' }
          ],
          lyrics: 'This is a quick line'
        },
        {
          chords: [
            { chord: 'E', position: 0, type: 'mid' },
            { chord: 'Amaj7', position: 15, type: 'mid' },
            { chord: 'B7', position: 32, type: 'mid' }
          ],
          lyrics: "This line carries some weight since it's the last one"
        }
      ]
    },
    {
      lines: [
        {
          chords: [
            { chord: 'A', position: 0, type: 'mid' },
            { chord: 'B7', position: 13, type: 'mid' }
          ],
          lyrics: 'Super catchy tag line'
        }
      ]
    }
  ]
};
