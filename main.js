const { app, globalShortcut } = require('electron')
const loudness = require('loudness')

const MIN_VOLUME = .1
const MAX_VOLUME = 100

const increaseVolume = () => {
  globalShortcut.register('Alt+Shift+M', async () => {
    const currentVolume = await loudness.getVolume()
    const volume = Math.min(currentVolume + 6, MAX_VOLUME)
    await loudness.setVolume(volume)
  })
}

const decreaseVolume = () => {
  globalShortcut.register('Alt+Shift+N', async () => {
    const currentVolume = await loudness.getVolume()
    const volume = Math.max(currentVolume - 6, MIN_VOLUME)

    await loudness.setVolume(volume)
  })
}

app.whenReady().then(() => {
  increaseVolume()
  decreaseVolume()
})
