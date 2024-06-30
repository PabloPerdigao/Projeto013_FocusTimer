import state from './state.js'
import * as timer from './timer.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.countDown()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
}

export function set() {

}

export function toggleMusic() {
  document.isMute = document.documentElement.classList.toggle('music-on')
}