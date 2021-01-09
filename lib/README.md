# @watch-state/mixer
[![NPM](https://img.shields.io/npm/v/@watch-state/mixer.svg)](https://github.com/d8corp/watch-state-mixer/blob/master/CHANGELOG.md)
[![downloads](https://img.shields.io/npm/dm/@watch-state/mixer.svg)](https://www.npmjs.com/package/@watch-state/mixer)
[![license](https://img.shields.io/npm/l/@watch-state/mixer)](https://github.com/d8corp/watch-state-mixer/blob/master/LICENSE)  
Mixer is a tool to mix usual variables with state

### Installation
npm
```bash
npm i @watch-state/mixer
```
yarn
```bash
yarn add @watch-state/mixer
```

Or just download a minified js file
[here](https://github.com/d8corp/innet-portal/blob/master/lib/watch-state-mixer.min.js)

### Using
`Mixer` works like `Cache` but you can mix some states and usual variables.
```javascript
let count = 0

const text = new Mixer(() => {
  return count++ ? (
    `Updated: ${count - 1}`
  ) : null
})

const watcher = new Watch(() => {
  console.log(
    text.value ? text.value : 'First render'
  )
})
// console.log('First render')

watcher.update()
// console.log('Updated: 1')

watcher.update()
// console.log('Updated: 2')
```
> you cannot use `mixer` inside `cache`, it'll be fixed in the future

### Issues
If you find a bug or have a suggestion, please file an issue on [GitHub](https://github.com/d8corp/watch-state-mixer/issues).  
[![issues](https://img.shields.io/github/issues-raw/d8corp/watch-state-mixer)](https://github.com/d8corp/watch-state-mixer/issues)
> ---
[![stars](https://img.shields.io/github/stars/d8corp/watch-state-mixer?style=social)](https://github.com/d8corp/watch-state-mixer/stargazers)
[![watchers](https://img.shields.io/github/watchers/d8corp/watch-state-mixer?style=social)](https://github.com/d8corp/watch-state-mixer/watchers)
