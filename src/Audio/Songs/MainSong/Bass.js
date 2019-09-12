import { sampleCount, trackBeatCount, bpm } from './common'
import createBassSound from '../../MusicSamples/Bass'
import { setNoteLengths, addNotes, makeNotesFromBars, offsetNotes } from '../../SongGeneration'

export const bassNotes = offsetNotes(makeNotesFromBars([
  [0, -26],
  [2, -26],
  [3.5, -23],
  [0, -30],
  [2, -30],
  [0, -28],
  [1.5, -28],
  [2, -31],
  [3, -31],
  [0, -26],
  [1.5, -26],
  [2, -26],
  [3, -28],
  [3.5, -34],
  [0, -33],
  [2, -33],
  [3.5, -33],
  [0, -23],
  [1.5, -23],
  [2, -23],
  [3, -23],
  [0, -21],
  [1, -21],
  [2, -24],
  [3, -24],
  [3.5, -23],
  [0, -31],
  [1, -31],
  [2, -31],
  [3.5, -26],
  [0, -30],
  [1.5, -30],
  [2, -30],
  [0, -28],
  [1.5, -28],
  [2, -28],
  [0, -27],
  [1, -27],
  [2, -31],
  [3, -31],
  [0, -26],
  [1, -31],
  [2, -26],
  [0, -26],
  [2, -26],
  [0, -26],
  [2, -26],
  [0, -26],
  [2, -26],
  [0, -35],
  [2, -31],
  [0, -30],
  [2, -28],
  [0, -26],
  [2, -28],
  [0, -30],
  [2, -30],
  [0, -28],
  [2, -27],
  [0, -26],
  [2, -26],
  [3.5, -23],
  [0, -30],
  [2, -30],
  [0, -28],
  [1.5, -28],
  [2, -31],
  [3, -31],
  [0, -26],
  [1.5, -26],
  [2, -26],
  [3, -28],
  [3.5, -34],
  [0, -33],
  [2, -33],
  [3.5, -33],
  [0, -23],
  [1.5, -23],
  [2, -23],
  [3, -23],
  [0, -21],
  [1, -21],
  [2, -24],
  [3, -24],
  [3.5, -23],
  [0, -31],
  [1, -31],
  [2, -31],
  [3.5, -26],
  [0, -30],
  [1.5, -30],
  [2, -30],
  [0, -28],
  [1.5, -28],
  [2, -28],
  [0, -27],
  [1, -27],
  [2, -31],
  [3, -31],
  [0, -26],
  [1, -31],
  [2, -26],
  [0, -26],
  [0.5, -26],
  [1, -26],
  [1.5, -26],
  [2, -26],
  [2.5, -26],
  [3, -26],
  [3.5, -23],
  [0, -30],
  [0.5, -30],
  [1, -30],
  [1.5, -30],
  [2, -30],
  [2.5, -30],
  [3, -30],
  [3.5, -26],
  [0, -33],
  [0.5, -33],
  [1, -33],
  [1.5, -33],
  [2, -33],
  [2.5, -33],
  [3, -33],
  [3.5, -33],
  [0, -35],
  [0.5, -35],
  [1, -35],
  [1.5, -35],
  [2, -31],
  [2.5, -31],
  [3, -31],
  [3.5, -31],
  [0, -30],
  [0.5, -30],
  [1, -30],
  [1.5, -30],
  [2, -28],
  [2.5, -28],
  [3, -28],
  [3.5, -28],
  [0, -26],
  [0.5, -26],
  [1, -26],
  [1.5, -26],
  [2, -28],
  [2.5, -28],
  [3, -28],
  [3.5, -28],
  [0, -30],
  [0.5, -30],
  [1, -30],
  [1.5, -30],
  [2, -30],
  [2.5, -30],
  [3, -30],
  [3.5, -30],
  [0, -28],
  [0.5, -28],
  [1, -28],
  [1.5, -28],
  [2, -27],
  [2.5, -27],
  [3, -27],
  [3.5, -27],
]), 16)

export function createBassTrack () {
  const output = new Float32Array(sampleCount)
  addNotes(setNoteLengths(bassNotes, trackBeatCount), output, createBassSound, bpm, true)

  return output
}
