export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await require('winston');
    await require('@elastic/ecs-winston-format')
    await require('next-logger');
  }
}
