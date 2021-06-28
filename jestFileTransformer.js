/*
  Emulate image file path export for jest.
*/
const path = require('path')

module.exports = {
  process(src, filename) {
    return `module.exports= ${JSON.stringify(path.basename(filename))};`
  }
}
