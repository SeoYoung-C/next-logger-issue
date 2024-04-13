import * as winston from 'winston'
import { ecsFormat } from '@elastic/ecs-winston-format'

type WinstonLogger = winston.Logger;

interface UserAgent {
    isBot: boolean;
    ua: string;
    browser: {
        name?: string;
        version?: string;
    };
    device: {
        model?: string;
        type?: string;
        vendor?: string;
    };
    engine: {
        name?: string;
        version?: string;
    };
    os: {
        name?: string;
        version?: string;
    };
    cpu: {
        architecture?: string;
    };
}

const transports = (isProd:boolean) => {
  if(isProd) {
    return [
      new winston.transports.Console(),
      // new winston.transports.File({
      //   filename: `/var/log/app${process.env.NEXT_PUBLIC_APP_NAME}.logs`
      // })
    ]
  }
  return [new winston.transports.Console()]
}

class Logger {
  public logger: WinstonLogger;

  constructor(tag: string, userAgent: UserAgent) {
    this.logger = winston.createLogger({
      level: process.env.LOG_LEVEL,
      handleExceptions: true,
      exitOnError: false,

      format: winston.format.combine(
        ecsFormat({apmIntegration: true})
      ),

      transports: transports(process.env.NODE_ENV === 'production')
    })
  }
}

export default Logger