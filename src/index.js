import Debug from 'debug'

const debug = Debug('app')

class A {
  render() {
    debug('render')
  }
}

export default A
