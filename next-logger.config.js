const { createLogger, transports } = require('winston')
const { ecsFormat } = require('@elastic/ecs-winston-format')

const logger = createLogger({
  transports: [
    new transports.Console({
      handleExceptions: true,
      format: ecsFormat(),
    }),
  ],
})

module.exports = {
  logger
}
