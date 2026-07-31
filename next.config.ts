import type { NextConfig } from 'next';
import type { Logger } from 'sass';

import path from 'node:path';

const nextConfig: NextConfig = {
  experimental: {
    useTypeScriptCli: true,
  },
  async headers() {
    return [
      {
        // apply these headers to all routes
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
    ];
  },
  poweredByHeader: false,
  reactCompiler: true,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [
      // allows you to write @use "package/scss/functions"
      path.join(import.meta.dirname, 'node_modules'),
    ],
    logger: {
      debug: function (message: string) {
        // use STDERR so messages appear reliably in the terminal build output
        // (some tooling filters stdout but not stderr)
        console.error(message);
      },
    } satisfies Logger,
  },
};

export default nextConfig;
