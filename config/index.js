var env
if (1 > 10) {
  env = 'prod'
}
else env = 'dev'

module.exports = require(`./.env.${env}.js`)