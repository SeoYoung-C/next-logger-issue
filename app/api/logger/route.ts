
import { NextRequest, NextResponse, userAgent } from 'next/server'
import Logger from '../../../service/logger'


export async function GET(request: NextRequest) {
  const { logger } = new Logger('test', userAgent(request));

  logger.info("test log");

  return NextResponse.json('success', {status: 200});
}

export const dynamic = 'force-dynamic';
 