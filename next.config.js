/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  output: 'standalone',
  experimental: {    
    instrumentationHook: true,
    serverComponentsExternalPackages: ['winston','@elastic/ecs-winston-format'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (
      config,
      { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
		if (!dev) {
			config.resolve.alias = {
				...config.resolve.alias,
        'winston': path.resolve(
					__dirname,
					'node_modules/winston',        
        ),
				'@elastic/ecs-winston-format': path.resolve(
					__dirname,
					'node_modules/@elastic/ecs-winston-format',
				),
			
			};
		}
    return config
  },
};

module.exports = nextConfig
