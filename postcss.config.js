const fs = require('fs');
const runCwdPath = '.' + process.cwd().replace(__dirname, '');

module.exports = fs.existsSync(runCwdPath + '/.postcssrc.js') ? require(runCwdPath + '/.postcssrc.js') : fs.existsSync(runCwdPath + '/postcss.config.js') ? require(runCwdPath + '/postcss.config.js') : {}